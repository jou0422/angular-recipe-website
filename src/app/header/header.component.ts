import { Component, inject, input } from '@angular/core';
import { NavigationStart, Router, RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public search: string = '';
  showHeader: boolean = false;
  isLoggedIn!: Observable<boolean>;
  private modalService = inject(NgbModal);

  // 監聽路由變化事件
  constructor(
    public router: Router,
    private recipeService: RecipeService,
    public userService: UserService,) {

    router.events.forEach((event: any) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login' || event['url'] == '/signup' || event['url'] == '/forgotpassword') {
          this.showHeader = false;
        } else {
          this.showHeader = true;
        }
      }
    })

    this.isLoggedIn = userService.isLoggedIn();
  }

  onClickLogout(): void {
    this.userService.changeToLogoutStatus();
    const modalRef = this.modalService.open(ModalComponent, { centered: true });
    modalRef.componentInstance.modalType = 'logOut';
  }

  public setKeywordValue(): void {
    this.router.navigate(['search'], {
      queryParams: { keyword: this.search }
    })
    this.recipeService.searchKeyword.next(this.search);
  }

}
