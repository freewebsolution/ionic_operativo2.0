import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettaglioinsalatonePage } from './dettaglioinsalatone.page';

const routes: Routes = [
  {
    path: '',
    component: DettaglioinsalatonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettaglioinsalatonePageRoutingModule {}
