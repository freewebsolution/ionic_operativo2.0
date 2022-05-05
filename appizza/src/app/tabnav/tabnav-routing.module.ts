import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabnavPage } from './tabnav.page';

const routes: Routes = [
  {
    path: '',
    component: TabnavPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'pizze',
        loadChildren: () => import('./../pizze/pizze.module').then(m => m.PizzePageModule)
      },
      {
        path: 'insalatone',
        loadChildren: () => import('./../insalatone/insalatone.module').then(m => m.InsalatonePageModule)
      },
      {
        path: 'preferiti',
        loadChildren: () => import('./../preferiti/preferiti.module').then(m => m.PreferitiPageModule)
      },
      {
        path: 'commenti',
        loadChildren: () => import('./../commenti/commenti.module').then(m => m.CommentiPageModule)
      },
      {
        path: 'contatti',
        loadChildren: () => import('./../contatti/contatti.module').then(m => m.ContattiPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./../cart/cart.module').then(m => m.CartPageModule)
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabnavPageRoutingModule {}
