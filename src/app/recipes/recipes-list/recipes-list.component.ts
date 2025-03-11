import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetail, TypeList } from '../../recipe';
import { Router, RouterModule } from '@angular/router';


@Component({
    selector: 'app-recipes-list',
    imports: [CommonModule, RouterModule],
    templateUrl: './recipes-list.component.html',
    styleUrl: './recipes-list.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})



export class RecipesListComponent {
  types : TypeList [] = [];
  recipes = [];

  slidesPerView: number = 4;
  spaceBetween = 33;
  screenWidth!: number;
  filter!: string;

  constructor(private router:Router){}

  @HostListener('window:resize')
  getScreenWudth(){
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

  showCarousel = true;

  onClickHashtag(filter:string){
    this.router.navigate(['discover'], {
      queryParams: { hashtag: filter }
    })
  }


}
