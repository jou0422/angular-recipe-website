import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HotRecipesComponent } from './recipes/hot-recipes/hot-recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { FooterComponent } from './footer/footer.component'
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';

@Component({
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, RouterModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'my-recipe';

  constructor(private userService: UserService, private scroller : ViewportScroller){
    this.scroller.setOffset([0,120]);
  }

  ngOnInit(): void {
    const localStorageKey = localStorage.getItem('isLoginStatus');
    if(localStorageKey === 'true'){
      this.userService.changeToLoginStatus();
    } else {
      this.userService.changeToLogoutStatus();
    }
  }
}



