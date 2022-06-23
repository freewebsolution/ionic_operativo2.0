import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

import { PreferitiPage } from './preferiti.page';

const routes: Routes = [
  {
    path: '',
    component: PreferitiPage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreferitiPageRoutingModule {}
