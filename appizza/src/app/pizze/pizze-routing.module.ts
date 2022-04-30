import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzePage } from './pizze.page';

const routes: Routes = [
  {
    path: '',
    component: PizzePage
  },
  {
    path: 'dettagliopizze',
    loadChildren: () => import('./dettagliopizze/dettagliopizze.module').then( m => m.DettagliopizzePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzePageRoutingModule {}
