import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) }, { path: 'shop', loadChildren: () => import('./modules/shop/shop.module').then(m => m.ShopModule) }, { path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) }, { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
