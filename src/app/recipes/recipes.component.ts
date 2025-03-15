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

}
