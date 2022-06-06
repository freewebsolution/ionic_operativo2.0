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
    loadChildren: () => import('./commenti/commenti.module').then(m => m.CommentiPageModule)
  },
  {
    path: 'pizze/commenti/:id',
    loadChildren: () => import('./commenti/dettagliocommenti/dettagliocommenti.module').then(m => m.DettagliocommentiPageModule)
  },
  {
    path: 'insalatone/commenti/:id',
    loadChildren: () => import('./commenti/dettagliocommenti/dettagliocommenti.module').then(m => m.DettagliocommentiPageModule)
  },
  {
    path: 'home/commenti/:id',
    loadChildren: () => import('./commenti/dettagliocommenti/dettagliocommenti.module').then(m => m.DettagliocommentiPageModule)
  },
  {
    path: 'home/pizza/:id',
    loadChildren: () => import('./pizze/dettagliopizze/dettagliopizze.module').then(m => m.DettagliopizzePageModule)
  },
  {
    path: 'home/pizza/:id/commenti/:id',
    loadChildren: () => import('./commenti/dettagliocommenti/dettagliocommenti.module').then(m => m.DettagliocommentiPageModule)
  },
  {
    path: 'pizze/pizza/:id/commenti/:id',
    loadChildren: () => import('./commenti/dettagliocommenti/dettagliocommenti.module').then(m => m.DettagliocommentiPageModule)
  },
  {
    path: 'home/insalatona/:id/commenti/:id',
    loadChildren: () => import('./commenti/dettagliocommenti/dettagliocommenti.module').then(m => m.DettagliocommentiPageModule)
  },
  {
    path: 'insalatone/insalatona/:id/commenti/:id',
    loadChildren: () => import('./commenti/dettagliocommenti/dettagliocommenti.module').then(m => m.DettagliocommentiPageModule)
  },
  {
    path: 'pizza/:id',
    loadChildren: () => import('./pizze/dettagliopizze/dettagliopizze.module').then(m => m.DettagliopizzePageModule)
  }, {
    path: 'pizze/pizza/:id',
    loadChildren: () => import('./pizze/dettagliopizze/dettagliopizze.module').then(m => m.DettagliopizzePageModule)
  },
  {
    path: 'home/insalatona/:id',
    loadChildren: () => import('./insalatone/dettaglioinsalatone/dettaglioinsalatone.module').then(m => m.DettaglioinsalatonePageModule)
  },
  {
    path: 'insalatona/:id',
    loadChildren: () => import('./insalatone/dettaglioinsalatone/dettaglioinsalatone.module').then(m => m.DettaglioinsalatonePageModule)
  },
  {
    path: 'insalatone/insalatona/:id',
    loadChildren: () => import('./insalatone/dettaglioinsalatone/dettaglioinsalatone.module').then(m => m.DettaglioinsalatonePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
