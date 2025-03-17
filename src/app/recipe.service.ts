import { Injectable } from '@angular/core';
import { RecipeDetail } from './recipe';
import { BehaviorSubject, Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public searchKeyword: BehaviorSubject<string> = new BehaviorSubject('');
  url = '/api/recipe';

  constructor() { }

  // public getRecipes(): Observable<RecipeDetail[]> {
  //   const recipes = of(Recipes); // 回傳一個 Observable<RecipeDetail[]> 發出單個值 (recipe 陣列 = recipes)
  //   return recipes;
  // }

  async getRecipes(text?:string): Promise<RecipeDetail[]> {
    // const recipes = await fetch(this.url);
    // return (await recipes.json()) ?? []; // 確保即使 API 回傳了空資料或錯誤資料，函數也會運行，不會拋出錯誤
    const response = await fetch(this.url + (text ? `?keyword=${text}` : '')); // 如果有 text 就加上 text 參數
    const recipes =  await response.json();

    if(!response.ok){
      throw new Error(response.statusText || 'Failed to fetch recipes');
    }
    if (!recipes || !Array.isArray(recipes)) {
      throw new Error('Invalid response');
    }
    return recipes;


  }


  // 根據 id 提取單個 recipe 資料
  // public getRecipe(id: number): Observable<RecipeDetail> {
  //   const recipe = Recipes.find(r => r.id === id)!; // ! >> 非空斷言運算符（Non-null Assertion Operator），確定這個值不會是 null/undefined
  //   return of(recipe);
  // }

  async getRecipe(id: number): Promise<RecipeDetail> {
    // const recipe = await fetch(`${this.url}/${id}`);
    // return (await recipe.json()) ?? {};
    const response = await fetch(`${this.url}/${id}`);
    const recipe =  await response.json();

    if(!response.ok){
      throw new Error(response.statusText || 'Failed to fetch recipe id: ${id}');
    }
    if (!recipe) {
      throw new Error('Invalid response');
    }
    return recipe;
  }



}
