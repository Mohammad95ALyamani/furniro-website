import { Component, OnInit } from '@angular/core';
import { ShopItemService } from '../shop-item.service';

@Component({
  selector: 'app-shop-items',
  templateUrl: './shop-items.component.html',
  styleUrls: ['./shop-items.component.scss']
})
export class ShopItemsComponent implements OnInit {

  showToIndex: any;

  shuffledShopItems: any;
  showArray: any;
  currentPage = 1;
  totalPages: any;
  pageCountArray: any;
  showType = 1;

  constructor(private shopItemService: ShopItemService) {

  }

  ngOnInit(): void {
    this.shuffledShopItems = this.shuffleArray(this.shopItemService.shopItems);
    this.showToIndex = this.shopItemService.showToIndex;
    this.shopItemService.$showToIndex.subscribe((value) => {
      this.showToIndex = value;
      this.currentPage = 1;
      this.displayItems(this.currentPage);
    })

    this.shopItemService.$showGalleryType.subscribe((value) => {
      //1 squre
      //2 tringle
      this.showGalleryType(value);
    })

    this.displayItems(this.currentPage);
  }

  shuffleArray<T>(array: T[]): T[] {
    const newArray = array.slice(); // Create a shallow copy of the original array
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
    }
    return newArray;
  }

  displayItems(pageNumber: number) {
    const startIndex = (pageNumber - 1) * Number(this.showToIndex);
    const endIndex = startIndex + Number(this.showToIndex);
    const pageItems = this.shuffledShopItems.slice(startIndex, endIndex);
    this.showArray = [];
    this.showArray = pageItems;
    console.log('this.showArray.length');
    console.log(this.showArray.length);
    this.totalPages = Math.ceil(this.shopItemService.shopItems.length / this.showToIndex);
    this.pageCountArray = [];
    this.pageCountArray = this.generatePageCountArray()
  }

  showGalleryType(type: any) {
    this.showType = type;
  }

  generatePageCountArray(): number[] {
    const pageCountArray: number[] = [];
    const maxVisiblePages = 1;

    if (this.totalPages <= maxVisiblePages) {
      for (let i = 1; i <= this.totalPages; i++) {
        pageCountArray.push(i);
      }
    } else {
      let start = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
      let end = start + maxVisiblePages - 1;
      if (end > this.totalPages) {
        end = this.totalPages;
        start = Math.max(1, end - maxVisiblePages + 1);
      }

      for (let i = start; i <= end; i++) {
        pageCountArray.push(i);
      }

      if (start > 1) {
        pageCountArray.unshift(-1);
        pageCountArray.unshift(1);
      }
      if (end < this.totalPages) {
        pageCountArray.push(-1);
        pageCountArray.push(this.totalPages);
      }
    }

    return pageCountArray;
  }

  // Function to handle button click for navigating to specific page
  goToPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.displayItems(this.currentPage);
  }

  // Function to handle button click for navigating to previous page
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.displayItems(this.currentPage);
    }
  }

  // Function to handle button click for navigating to next page
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.displayItems(this.currentPage);
    }
  }
}
