import {Injectable, EventEmitter} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import {Recipe} from './recipe';
import {Ingredient} from '../shared';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();

  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://goo.gl/YHC0mq', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://goo.gl/CZnsDW', [])
  ];

  constructor(private http: Http) {
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(recipeIndex: number): Recipe {
    return this.recipes[recipeIndex];
  }

  deleteRecipe(recipe: Recipe): void {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const url = 'https://recipebook-7150e.firebaseio.com/recipes.json';
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put(url, body, {headers: headers});
  }

  fetchData() {
    const url = 'https://recipebook-7150e.firebaseio.com/recipes.json';
    return this.http.get(url).map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        }
      );

  }
}
