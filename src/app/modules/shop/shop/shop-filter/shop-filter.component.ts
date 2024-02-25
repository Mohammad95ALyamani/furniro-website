import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShopItemService } from '../shop-item.service';

@Component({
  selector: 'app-shop-filter',
  templateUrl: './shop-filter.component.html',
  styleUrls: ['./shop-filter.component.scss']
})
export class ShopFilterComponent implements OnInit {

  shopItems: any;
  showToIndex: any;

  constructor(private shopItemService: ShopItemService) {
    this.shopItems = shopItemService.shopItems;
    this.showToIndex = shopItemService.showToIndex;
  }

  showGallery(type: any) {
    //1 squre
    //2 tringle
    this.shopItemService.setshowGalleryType(type);
  }

  ngOnInit(): void {
  }

  async changeShowToIndex() {
    if (this.showToIndex != "") {
      this.shopItemService.setShowToIndex(this.showToIndex);
    } else {
      this.shopItemService.setShowToIndex(1);
    }
  }
}
