import { Injectable } from '@angular/core';
import { Commentinfo, RecipeDetail } from './recipe';
// import { Recipes } from './mock-recipes';
import { BehaviorSubject, Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public searchKeyword: BehaviorSubject<string> = new BehaviorSubject('');
  url = 'http://localhost:3000/recipe';

  constructor() { }

  // public getRecipes(): Observable<RecipeDetail[]> {
  //   const recipes = of(Recipes); // 回傳一個 Observable<RecipeDetail[]> 發出單個值 (recipe 陣列 = recipes)
  //   return recipes;
  // }

  async getRecipes(): Promise<RecipeDetail[]> {
    const recipes = await fetch(this.url);
    return (await recipes.json()) ?? [];
  }


  // 根據 id 提取單個 recipe 資料
  // public getRecipe(id: number): Observable<RecipeDetail> {
  //   const recipe = Recipes.find(r => r.id === id)!; // ! >> 非空斷言運算符（Non-null Assertion Operator），確定這個值不會是 null/undefined
  //   return of(recipe);
  // }

  async getRecipe(id: number): Promise<RecipeDetail> {
    const recipe = await fetch(`${this.url}/${id}`);
    return (await recipe.json()) ?? {};
  }



}
