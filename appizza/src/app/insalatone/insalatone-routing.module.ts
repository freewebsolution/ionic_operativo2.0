import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsalatonePage } from './insalatone.page';

const routes: Routes = [
  {
    path: '',
    component: InsalatonePage
  },
  {
    path: 'dettaglioinsalatone',
    loadChildren: () => import('./dettaglioinsalatone/dettaglioinsalatone.module').then( m => m.DettaglioinsalatonePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsalatonePageRoutingModule {}
