import { Routes } from '@angular/router';
import { CocktailComponent } from './cocktail/cocktail.component';
import { IngredientComponent } from './ingredient/ingredient.component';

export const routes: Routes = [
  { path: 'cocktail/:name', component: CocktailComponent },
  { path: 'ingredient/:id', component: IngredientComponent },
  { path: '**', redirectTo: '' },
];
