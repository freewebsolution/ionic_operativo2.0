import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettagliopizzePage } from './dettagliopizze.page';

const routes: Routes = [
  {
    path: '',
    component: DettagliopizzePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettagliopizzePageRoutingModule {}
