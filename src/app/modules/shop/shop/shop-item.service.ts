import { Injectable } from '@angular/core';
import { Subject, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopItemService {

  showToIndex: any = 12;
  shopItems = [
    {
      'id': 1,
      'name': 'Syltherine',
      'desc': 'Stylish cafe chair',
      'price': 'Rp 2.500.000',
      'beforeSalePrice': 'Rp 3.500.000',
      'imageurl': '../../../../../assets/syltherine.png'
    },
    {
      'id': 2,
      'name': 'Leviosa',
      'desc': 'Stylish cafe chair',
      'price': 'Rp 2.500.000',
      'beforeSalePrice': '',
      'imageurl': '../../../../../assets/leviosa.png'
    },
    {
      'id': 3,
      'name': 'Lolito',
      'desc': 'Luxury big sofa',
      'price': 'Rp 7.000.000',
      'beforeSalePrice': 'Rp 14.000.000',
      'imageurl': '../../../../../assets/lolito.png'
    },
    {
      'id': 4,
      'name': 'Respira',
      'desc': 'Outdoor bar table and stool',
      'price': 'Rp 500.000',
      'beforeSalePrice': '',
      'imageurl': '../../../../../assets/respira.png'
    },
    {
      'id': 5,
      'name': 'Grifo',
      'desc': 'Night lamp',
      'price': 'Rp 1.500.000',
      'beforeSalePrice': '',
      'imageurl': '../../../../../assets/grifo.png'
    },
    {
      'id': 6,
      'name': 'Muggo',
      'desc': 'Small mug',
      'price': 'Rp 150.000',
      'beforeSalePrice': '',
      'imageurl': '../../../../../assets/muggo.png'
    },
    {
      'id': 7,
      'name': 'Pingky',
      'desc': 'Cute bed set',
      'price': 'Rp 7.000.000',
      'beforeSalePrice': 'Rp 14.000.000',
      'imageurl': '../../../../../assets/pingky.png'
    },
    {
      'id': 8,
      'name': 'Potty',
      'desc': 'Minimalist flower pot',
      'price': 'Rp 500.000',
      'beforeSalePrice': '',
      'imageurl': '../../../../../assets/potty.png'
    },
    {
      'id': 9,
      'name': 'Syltherine',
      'desc': 'Stylish cafe chair',
      'price': 'Rp 2.500.000',
      'beforeSalePrice': 'Rp 3.500.000',
      'imageurl': '../../../../../assets/syltherine.png'
    },
    {
      'id': 10,
      'name': 'Leviosa',
      'desc': 'Stylish cafe chair',
      'price': 'Rp 2.500.000',
      'beforeSalePrice': '',
      'imageurl': '../../../../../assets/leviosa.png'
    },
    {
      'id': 11,
      'name': 'Lolito',
      'desc': 'Luxury big sofa',
      'price': 'Rp 7.000.000',
      'beforeSalePrice': 'Rp 14.000.000',
      'imageurl': '../../../../../assets/lolito.png'
    },
    {
      'id': 12,
      'name': 'Respira',
      'desc': 'Outdoor bar table and stool',
      'price': 'Rp 500.000',
      'beforeSalePrice': '',
      'imageurl': '../../../../../assets/respira.png'
    },
    {
      'id': 13,
      'name': 'Grifo',
      'desc': 'Night lamp',
      'price': 'Rp 1.500.000',
      'beforeSalePrice': '',
      'imageurl': '../../../../../assets/grifo.png'
    },
    {
      'id': 14,
      'name': 'Muggo',
      'desc': 'Small mug',
      'price': 'Rp 150.000',
      'beforeSalePrice': '',
      'imageurl': '../../../../../assets/muggo.png'
    },
    {
      'id': 15,
      'name': 'Pingky',
      'desc': 'Cute bed set',
      'price': 'Rp 7.000.000',
      'beforeSalePrice': 'Rp 14.000.000',
      'imageurl': '../../../../../assets/pingky.png'
    },
    {
      'id': 16,
      'name': 'Potty',
      'desc': 'Minimalist flower pot',
      'price': 'Rp 500.000',
      'beforeSalePrice': '',
      'imageurl': '../../../../../assets/potty.png'
    },
    {
      'id': 17,
      'name': 'Syltherine',
      'desc': 'Stylish cafe chair',
      'price': 'Rp 2.500.000',
      'beforeSalePrice': 'Rp 3.500.000',
      'imageurl': '../../../../../assets/syltherine.png'
    },
    {
      'id': 18,
      'name': 'Leviosa',
      'desc': 'Stylish cafe chair',
      'price': 'Rp 2.500.000',
      'beforeSalePrice': '',
      'imageurl': '../../../../../assets/leviosa.png'
    },
    {
      'id': 19,
      'name': 'Lolito',
      'desc': 'Luxury big sofa',
      'price': 'Rp 7.000.000',
      'beforeSalePrice': 'Rp 14.000.000',
      'imageurl': '../../../../../assets/lolito.png'
    },
    {
      'id': 20,
      'name': 'Respira',
      'desc': 'Outdoor bar table and stool',
      'price': 'Rp 500.000',
      'beforeSalePrice': '',
      'imageurl': '../../../../../assets/respira.png'
    },
    {
      'id': 21,
      'name': 'Grifo',
      'desc': 'Night lamp',
      'price': 'Rp 1.500.000',
      'beforeSalePrice': '',
      'imageurl': '../../../../../assets/grifo.png'
    },
    {
      'id': 22,
      'name': 'Muggo',
      'desc': 'Small mug',
      'price': 'Rp 150.000',
      'beforeSalePrice': '',
      'imageurl': '../../../../../assets/muggo.png'
    },
    {
      'id': 23,
      'name': 'Pingky',
      'desc': 'Cute bed set',
      'price': 'Rp 7.000.000',
      'beforeSalePrice': 'Rp 14.000.000',
      'imageurl': '../../../../../assets/pingky.png'
    },
    {
      'id': 24,
      'name': 'Potty',
      'desc': 'Minimalist flower pot',
      'price': 'Rp 500.000',
      'beforeSalePrice': '',
      'imageurl': '../../../../../assets/potty.png'
    },
    {
      'id': 25,
      'name': 'Potty',
      'desc': 'Minimalist flower pot',
      'price': 'Rp 500.000',
      'beforeSalePrice': '',
      'imageurl': '../../../../../assets/potty.png'
    },
    {
      'id': 26,
      'name': 'Syltherine',
      'desc': 'Stylish cafe chair',
      'price': 'Rp 2.500.000',
      'beforeSalePrice': 'Rp 3.500.000',
      'imageurl': '../../../../../assets/syltherine.png'
    },
    {
      'id': 27,
      'name': 'Leviosa',
      'desc': 'Stylish cafe chair',
      'price': 'Rp 2.500.000',
      'beforeSalePrice': '',
      'imageurl': '../../../../../assets/leviosa.png'
    },
    {
      'id': 28,
      'name': 'Lolito',
      'desc': 'Luxury big sofa',
      'price': 'Rp 7.000.000',
      'beforeSalePrice': 'Rp 14.000.000',
      'imageurl': '../../../../../assets/lolito.png'
    },
    {
      'id': 29,
      'name': 'Respira',
      'desc': 'Outdoor bar table and stool',
      'price': 'Rp 500.000',
      'beforeSalePrice': '',
      'imageurl': '../../../../../assets/respira.png'
    },
    {
      'id': 30,
      'name': 'Grifo',
      'desc': 'Night lamp',
      'price': 'Rp 1.500.000',
      'beforeSalePrice': '',
      'imageurl': '../../../../../assets/grifo.png'
    },
    {
      'id': 31,
      'name': 'Muggo',
      'desc': 'Small mug',
      'price': 'Rp 150.000',
      'beforeSalePrice': '',
      'imageurl': '../../../../../assets/muggo.png'
    },
    {
      'id': 32,
      'name': 'Pingky',
      'desc': 'Cute bed set',
      'price': 'Rp 7.000.000',
      'beforeSalePrice': 'Rp 14.000.000',
      'imageurl': '../../../../../assets/pingky.png'
    },
  ];

  private _showToIndex = new Subject<any>();
  private _showGalleryType = new Subject<any>();
  
  $showToIndex = this._showToIndex.asObservable();
  $showGalleryType = this._showGalleryType.asObservable();

  constructor() { }

  setShowToIndex(showToIndex:any){
    this._showToIndex.next(showToIndex);
    this.$showToIndex.pipe(first());
    this.showToIndex = showToIndex;
  }

  setshowGalleryType(showGalleryType:any){
    this._showGalleryType.next(showGalleryType);
    this.$showGalleryType.pipe(first());
  }
}
