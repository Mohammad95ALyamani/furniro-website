import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HomeBrowseTheRangeComponent } from './home/home-browse-the-range/home-browse-the-range.component';
import { OurProductsComponent } from './home/our-products/our-products.component';
import { HomeTestimonialComponent } from './home/home-testimonial/home-testimonial.component';
import { FuniroFurnitureComponent } from './home/funiro-furniture/funiro-furniture.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeBrowseTheRangeComponent,
    OurProductsComponent,
    HomeTestimonialComponent,
    FuniroFurnitureComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
