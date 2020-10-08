import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditIngredienteComponent } from './edit-ingrediente/edit-ingrediente.component';
import { EditLancheComponent } from './edit-lanche/edit-lanche.component';
import { IngredientesGridComponent } from './ingredientes-grid/ingredientes-grid.component';
import { LanchesContainerComponent } from './lanches-container/lanches-container.component';
import { LanchesGridComponent } from './lanches-grid/lanches-grid.component';

const routes: Routes = [
  {
    path: '',
    component: LanchesContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanchesRoutingModule {
  static components = [
    LanchesContainerComponent,
    LanchesGridComponent,
    EditLancheComponent,
    IngredientesGridComponent,
    EditIngredienteComponent,
  ];
}
