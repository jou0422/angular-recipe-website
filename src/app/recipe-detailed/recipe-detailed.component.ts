import { filter } from 'rxjs';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, HostListener } from '@angular/core';
import { RouterModule, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgIf, CommonModule, ViewportScroller, NgFor } from '@angular/common';
import { RecipeService } from '../recipe.service';
import { Commentinfo, RecipeDetail } from '../recipe';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { UserService } from '../user.service';
import { SwiperModule } from 'swiper/types';

@Component({
  selector: 'app-recipe-detailed',
  standalone: true,
  imports: [RouterModule, NgIf, CommonModule, NgFor, ReactiveFormsModule],
  templateUrl: './recipe-detailed.component.html',
  styleUrl: './recipe-detailed.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RecipeDetailedComponent {

  private modalService = inject(NgbModal);
  likeIncrease!: boolean;
  incrementLikes: number = 0;
  form = new FormGroup({
    comment: new FormControl('', {
      validators: [Validators.required]
    }),
  })
  recipe!: RecipeDetail;
  recipes: RecipeDetail[] = [];
  otherRecipes: RecipeDetail[] = [];

  slidesPerView: number = 4;
  spaceBetween = 33;
  screenWidth!: number;
  showCarousel = true;


  constructor(
    private route: ActivatedRoute,  // 提取路由引數 id
    private router:Router,
    private recipeService: RecipeService,  // 獲取資料
    private scroller: ViewportScroller,
    private userService: UserService,
  ) {
    this.getRecipe();
}

  ngOnInit(): void {
    this.recipeService.getRecipes().then((recipes: RecipeDetail[]) => {
    this.recipes = recipes
    })
    this.getRecipe();

    // 監聽路由變化，在同一個頁面點擊其他食譜時，重新獲取食譜資料
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd){
        this.getRecipe();
      }
    })
  }

    /**
   * 點選食譜跑出相對食譜 detailed
   */
  // 還要在 sevice 裡新增 getRecipes() 的方法
  // getRecipe(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.recipeService.getRecipe(id)
  //     .subscribe(res => this.recipe = res);
  //   this.otherRecipes = this.recipes.filter((res) => res.id !== id)
  // }

  getRecipe(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.recipeService.getRecipe(id).then((recipe) => {
      this.recipe = recipe;
      this.otherRecipes = this.recipes.filter((res) => res.id !== id)
    });
  }

  @HostListener('window:resize')
  getScreenWudth() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 992) {
      this.slidesPerView = 4;
      this.spaceBetween = 33;
    }
    else if (this.screenWidth >= 576 && this.screenWidth <= 992) {
      this.slidesPerView = 2;
      this.spaceBetween = 20;
    }
    else if (this.screenWidth < 576) {
      this.slidesPerView = 1;
      this.spaceBetween = 20;
    }
  }

  /**
   * 跳出需要登入的 modal
   */
  openModalNeedToLogin() {
    const modalRef = this.modalService.open(ModalComponent, { centered: true });
    modalRef.componentInstance.modalType = 'needToLogin';
  }

  /**
    * 判斷登入與否，某些功能需要登入才能執行
    */
  onClickNeedToLogin() {
    const localStorageKey = localStorage.getItem('isLoginStatus');
    if (localStorageKey !== 'true') {
      this.openModalNeedToLogin();
    }
  }


  /**
   * 點擊送出 comment
   */
  onClickSubmitComment() {
    const modalRef = this.modalService.open(ModalComponent, { centered: true });
    modalRef.componentInstance.modalType = 'comment';
    this.form.reset();
  }

  /**
   * 點擊食譜 likeBtn
   * @param {number} incrementLikes 原本的Like總數
   * @memberof RecipeDetailedComponent
   */
  onClickLikeRecipe(incrementLikes: number): void {
    const localStorageKey = localStorage.getItem('isLoginStatus');
    if (localStorageKey !== 'true') {
      this.openModalNeedToLogin();
    } else {
      if (incrementLikes == 0) {
        this.likeIncrease = true;
        this.incrementLikes++;
      } else {
        this.likeIncrease = false;
        this.incrementLikes--;
      }
    }
  }

  /**
   * 點擊留言 likeBtn
   * @param {number} index 第幾則留言
   * @memberof RecipeDetailedComponent
   */
  onClickLikeComment(index: number): void {
    const localStorageKey = localStorage.getItem('isLoginStatus');
    if (localStorageKey !== 'true') {
      this.openModalNeedToLogin();
    } else {
      switch (this.recipe.comments[index].isLike) {
        case 0:
          this.recipe.comments[index].isLike = 1;
          this.recipe.comments[index].like++;
          break;
        case 1:
          this.recipe.comments[index].isLike = 0;
          this.recipe.comments[index].like--;
          break;
      }
    }
  }


  /**
   * setOffset 設置滾動偏差, y 是 header 高度再加一點
   * 點選下滑到 comment list
   */
  public onClickScrollToCommentList() {
    this.scroller.setOffset([0, 120]),
      this.scroller.scrollToAnchor("commentsList");
  }

  /**
   * 把 mock-recipes ingredients & nutrition 的單位轉換成字串
   * @param {number} weightTypeId mock-recipes > ingredients & nutrition 的 type
   * @return {*}  {string} 返回字串
   */
  public findTypeValue(weightTypeId: number): string {
    switch (weightTypeId) {
      case 1:
        return 'g';
      case 2:
        return 'tsp';
      case 3:
        return 'tbsp';
      case 4:
        return 'ml';
      default:
        return '';
    }
  }

  /**
   * 點擊留言 btn
   */
  onClickLeaveComment() {
    const newComment: Commentinfo = {
      persona: this.userService.userName,
      comment: this.form.controls.comment.value!,
      like: 0,
      isLike: 0
    }
    this.recipe.comments.push(newComment);
    this.recipe.commentQty++;
    this.onClickSubmitComment();
  }


    onClickHashtag(filter:string){
    this.router.navigate(['discover'], {
      queryParams: { hashtag: filter }
    })
  }

}
