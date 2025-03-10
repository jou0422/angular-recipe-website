import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetail, TypeList } from '../../recipe';
import { Router, RouterModule } from '@angular/router';
import { Recipes } from '../../mock-recipes';


@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})



export class RecipesListComponent {
  types : TypeList [] = [];
  recipes = Recipes;

  slidesPerView: number = 4;
  spaceBetween = 33;
  screenWidth!: number;
  filter!: string;
  showCarousel = true;

  constructor(private router:Router){
  }

  ngAfterViewInit(): void {
    this.getScreenWidth();
  }

  /**
   * 在想要執行的function前面加上 @HostListener('window:resize')，當視窗大小改變時，就會執行這個function
   */
  @HostListener('window:resize')
  getScreenWidth(){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth > 992){
      this.slidesPerView = 4;
      this.spaceBetween = 33;
    }
    else if(this.screenWidth >= 576 && this.screenWidth <= 992){
      this.slidesPerView = 2;
      this.spaceBetween = 20;
    }
    else if(this.screenWidth < 576){
      this.slidesPerView = 1;
      this.spaceBetween = 20;
    }
  }



  onClickHashtag(filter:string){
    this.router.navigate(['discover'], {
      queryParams: { hashtag: filter }
    })
  }


}
