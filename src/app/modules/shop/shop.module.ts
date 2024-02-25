import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop/shop.component';
import { ShopHeaderComponent } from './shop/shop-header/shop-header.component';
import { ShopItemsComponent } from './shop/shop-items/shop-items.component';
import { ShopFilterComponent } from './shop/shop-filter/shop-filter.component';
import { ShopSponserComponent } from './shop/shop-sponser/shop-sponser.component';
import { FormsModule } from '@angular/forms';
import { ShowShopItemComponent } from './show-shop-item/show-shop-item.component';
import { ShowShopItemDescComponent } from './show-shop-item/show-shop-item-desc/show-shop-item-desc.component';


@NgModule({
  declarations: [
    ShopComponent,
    ShopHeaderComponent,
    ShopItemsComponent,
    ShopFilterComponent,
    ShopSponserComponent,
    ShowShopItemComponent,
    ShowShopItemDescComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FormsModule
  ]
})
export class ShopModule { }
