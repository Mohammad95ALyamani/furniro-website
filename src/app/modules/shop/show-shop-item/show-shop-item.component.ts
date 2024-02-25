import { Component } from '@angular/core';

@Component({
  selector: 'app-show-shop-item',
  templateUrl: './show-shop-item.component.html',
  styleUrls: ['./show-shop-item.component.scss']
})
export class ShowShopItemComponent {

  item = {
    images: [
      '../../.././../assets/show-item/image1.png',
      '../../.././../assets/show-item/image2.png',
      '../../.././../assets/show-item/image3.png',
      '../../.././../assets/show-item/image4.png'
    ],
    name: 'Asgaard sofa',
    price: 'Rs. 250,000.00',
    desc: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',
    sizes: ['XS', 'L', 'XL'],
    colors: ['#816DFA', '#000000', '#B88E2F'],
    sku: 'SS001',
    category: 'Sofas',
    tags: 'Sofa, Chair, Home, Shop',
  };

  selectedImage = this.item.images[0];

  manyItem = 1;


  changeViewImage(img: any) {
    this.selectedImage = img;
  }

  addMinItems(func: any) {
    if (func == 'add') {
      this.manyItem++;
    }

    if (func == 'min') {
      if (this.manyItem == 1) return;
      this.manyItem--;
    }
  }
}
