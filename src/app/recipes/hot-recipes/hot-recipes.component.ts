import { RecipeDetail } from './../../recipe';
import { Component } from '@angular/core';
import { CommonModule, ViewportScroller  } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { RecipeDetailedComponent } from "../../recipe-detailed/recipe-detailed.component";
import { RecipeService } from '../../recipe.service';
import { Recipes } from '../../mock-recipes';



@Component({
  selector: 'app-hot-recipes',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './hot-recipes.component.html',
  styleUrl: './hot-recipes.component.scss'
})
export class HotRecipesComponent {
  // recipes = Recipes;
  // selectedRecipe?: RecipeDetail;

  // onSelect(recipe: RecipeDetail): void {
  //   this.selectedRecipe = recipe;
  // }

  recipes: RecipeDetail[] = Recipes;

  constructor(
    private recipeService: RecipeService,
    private scroller : ViewportScroller,
    private router:Router) {
  }


  // 賦值同步
  // getRecipes() : void{
  //   this.recipes = this.recipeService.getRecipes();
  // }


  //非同步從遠段伺服器獲取資料
  // getRecipes() : void{
  //   this.recipeService.getRecipes()
  //       // .subscribe (recipes => this.recipes = recipes);
  //       .subscribe (recipes => this.recipes = recipes.slice (0,4)) // 回傳第1~5個
  // }

  getRecipes() : void{
    this.recipeService.getRecipes().then((recipes: RecipeDetail[]) => {
      // this.recipes = recipes.slice(0, 4);
      this.recipes = recipes.sort((a,b) => b.likeQty - a.likeQty).slice(0, 4);
    })
  }

  ngOnInit(): void {
    this.getRecipes();
  }


  /**
   * setOffset 設置滾動偏差 ([x, y]), y 是 header 高度再加一點
   */
  scrollToHotRecipes(){
    this.scroller.scrollToAnchor("hotRecipes");
  }

  onClickHashtag(filter:string){
    this.router.navigate(['discover'], {
      queryParams: { hashtag: filter }
    })
  }

}

// Recipes >> 全部 (HEROS)
// recipes 屬性 >> expose Recipes 全部的陣列 (heros)
// recipe 單個物件
// RecipeDetail 單個細項 (Hero)
