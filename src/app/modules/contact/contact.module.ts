import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';
import { ContactHeaderComponent } from './contact/contact-header/contact-header.component';


@NgModule({
  declarations: [
    ContactComponent,
    ContactHeaderComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
