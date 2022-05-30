import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettagliocommentiPage } from './dettagliocommenti.page';

const routes: Routes = [
  {
    path: '',
    component: DettagliocommentiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettagliocommentiPageRoutingModule {}
