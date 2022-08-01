import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeEmptyComponent } from './recipe-empty/recipe-empty.component';

const routes: Routes = [
    { path: '', component: RecipesComponent, children: [
        { path: '', component: RecipeEmptyComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent },
    ] }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RecipesRoutingModule {}