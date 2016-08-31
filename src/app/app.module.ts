import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { DropdownDirective } from './dropdown.directive';
import {
  ShoppingListComponent,
  ShoppingListAddComponent,
  ShoppingListService
} from './shopping-list';
import { RecipeStartComponent, RecipesComponent } from './recipes';
import { RecipeListComponent, RecipeItemComponent } from './recipes/recipe-list';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipes/recipe.service';
import { routing } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    ShoppingListAddComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeStartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

