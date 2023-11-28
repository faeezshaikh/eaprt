import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'capabilities',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   canActivate: [AuthGuard],
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: 'capabilities',
    canActivate: [AuthGuard],
    loadChildren: () => import('./shipping/shipping.module').then( m => m.ShippingPageModule)
  }
  ,
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'card-details',
    loadChildren: () => import('./card-details/card-details.module').then( m => m.CardDetailsPageModule)
  }
  ,
  {
    path: 'leveldetail',
    loadChildren: () => import('./leveldetail/leveldetail.module').then( m => m.LeveldetailPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
