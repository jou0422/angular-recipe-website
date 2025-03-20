import { UserService } from './../user.service';
import { Component } from '@angular/core';
import { HotRecipesComponent } from './hot-recipes/hot-recipes.component'
import { RecipesListComponent } from './recipes-list/recipes-list.component';


@Component({
    selector: 'app-recipes',
    imports: [HotRecipesComponent, RecipesListComponent],
    templateUrl: './recipes.component.html',
    styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  userProfile:any;

  constructor(
    private userService: UserService
  ){

  }

  ngOnInit(): void {
    this.userProfile = JSON.parse(sessionStorage.getItem("googleLoggedInUser") || "{}");
    console.log(sessionStorage.getItem("googleLoggedInUser"));
    console.log(this.userProfile);
    console.log(this.userProfile.given_name);
    if(this.userProfile.given_name){ // 如果 given_name 是空字符串 '' 或 null、undefined 或其他「假值」，會被視為 false，條件不成立
      this.userService.userName$.next(this.userProfile.given_name);
      this.userService.isLoginSubject.next(true);
    }
  }


}
