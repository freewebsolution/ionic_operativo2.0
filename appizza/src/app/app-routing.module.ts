import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./tabnav/tabnav.module').then(m => m.TabnavPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'contatti',
    loadChildren: () => import('./contatti/contatti.module').then(m => m.ContattiPageModule)
  },
  {
    path: 'commenti',
    loadChildren: () => import('./commenti/commenti.module').then( m => m.CommentiPageModule)
  },
  {
    path: 'pizze/commenti/:id',
    loadChildren: () => import('./commenti/dettagliocommenti/dettagliocommenti.module').then( m => m.DettagliocommentiPageModule)
  },
  {
    path: 'insalatone/commenti/:id',
    loadChildren: () => import('./commenti/dettagliocommenti/dettagliocommenti.module').then(m => m.DettagliocommentiPageModule)
  },
  {
    path: 'home/commenti/:id',
    loadChildren: () => import('./commenti/dettagliocommenti/dettagliocommenti.module').then(m => m.DettagliocommentiPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
