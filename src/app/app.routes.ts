import { Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { RecipesComponent } from './recipes/recipes.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RecipeDetailedComponent } from './recipe-detailed/recipe-detailed.component';
import { DiscoverComponent } from './discover/discover.component';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { authGuard } from './auth.guard';



export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: RecipesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent, canActivate: [authGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [authGuard] },
  { path: 'recipe/:id', component: RecipeDetailedComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'search', component: SearchComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent, canActivate: [authGuard] },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

