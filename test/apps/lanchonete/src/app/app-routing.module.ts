import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'lanches',
    loadChildren: () => import('./lanches/lanches.module').then((m) => m.LanchesModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'lanches',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  static components = [AppComponent];
}
