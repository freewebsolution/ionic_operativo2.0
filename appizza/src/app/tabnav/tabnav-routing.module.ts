/* eslint-disable max-len */
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
      },
      {
        path: 'pizze/commenti/:id',
        loadChildren: () => import('./../commenti/dettagliocommenti/dettagliocommenti.module').then(m => m.DettagliocommentiPageModule)
      },
      {
        path: 'home/pizza/:id/commenti/:id',
        loadChildren: () => import('./../commenti/dettagliocommenti/dettagliocommenti.module').then(m => m.DettagliocommentiPageModule)
      },
      {
        path: 'pizze/pizza/:id/commenti/:id',
        loadChildren: () => import('./../commenti/dettagliocommenti/dettagliocommenti.module').then(m => m.DettagliocommentiPageModule)
      },
      {
        path: 'home/insalatona/:id/commenti/:id',
        loadChildren: () => import('./../commenti/dettagliocommenti/dettagliocommenti.module').then(m => m.DettagliocommentiPageModule)
      },
      {
        path: 'insalatone/insalatona/:id/commenti/:id',
        loadChildren: () => import('./../commenti/dettagliocommenti/dettagliocommenti.module').then(m => m.DettagliocommentiPageModule)
      },
      {
        path: 'home/commenti/:id',
        loadChildren: () => import('./../commenti/dettagliocommenti/dettagliocommenti.module').then(m => m.DettagliocommentiPageModule)
      },
      {
        path: 'home/pizza/:id',
        loadChildren: () => import('./../pizze/dettagliopizze/dettagliopizze.module').then(m => m.DettagliopizzePageModule)
      },
      {
        path: 'pizze/pizza/:id',
        loadChildren: () => import('./../pizze/dettagliopizze/dettagliopizze.module').then(m => m.DettagliopizzePageModule)
      },
      {
        path: 'home/insalatona/:id',
        loadChildren: () => import('./../insalatone/dettaglioinsalatone/dettaglioinsalatone.module').then(m => m.DettaglioinsalatonePageModule)
      },
      {
        path: 'insalatone/insalatona/:id',
        loadChildren: () => import('./../insalatone/dettaglioinsalatone/dettaglioinsalatone.module').then(m => m.DettaglioinsalatonePageModule)
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabnavPageRoutingModule { }
