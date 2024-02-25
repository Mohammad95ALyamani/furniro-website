import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  openNav(){
    var element = document.querySelector('.my-nav');
    element!.classList.toggle('open');
  }
}
