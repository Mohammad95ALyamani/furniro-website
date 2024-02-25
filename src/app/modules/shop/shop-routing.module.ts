import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ShowShopItemComponent } from './show-shop-item/show-shop-item.component';

const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: 'show-item', component: ShowShopItemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
