import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentiformPage } from './commentiform.page';

const routes: Routes = [
  {
    path: '',
    component: CommentiformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentiformPageRoutingModule {}
