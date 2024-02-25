import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-testimonial',
  templateUrl: './home-testimonial.component.html',
  styleUrls: ['./home-testimonial.component.scss']
})
export class HomeTestimonialComponent implements OnInit {

  selectedTestimon: any;

  testimons: any;

  selectedIndex:any = 1;

  ngOnInit(): void {
    this.testimons = [
      { 'title': '01 --- Bed Room', 'desc': 'Inner Peace', 'imageUrl':'./assets/testimon1.png' },
      { 'title': '02 --- Room Table', 'desc': 'Inner Peace', 'imageUrl':'./assets/testimon2.png' },
      { 'title': '03 --- Room Capenet', 'desc': 'Inner Peace', 'imageUrl':'./assets/testimon3.png' }
    ];

    this.selectedTestimon = this.testimons[0];
  }

  changeSelected(index:any){
    this.selectedTestimon = this.testimons[index];
  }

  changeSelectedBtn(){
    const selectedIndex = this.testimons.findIndex((x:any) => x === this.selectedTestimon);
    const element = document.querySelector('.testimon-image') as  HTMLElement;
    const element2 = document.querySelector('.img-con') as  HTMLElement;
    element2.classList.toggle('opacity');
    if(selectedIndex == this.testimons.length - 1){
      this.selectedTestimon = this.testimons[0];
      this.selectedIndex = 1;
    }else{
      this.selectedIndex = this.selectedIndex + 1;
      this.selectedTestimon = this.testimons[selectedIndex + 1];
    }
    setTimeout(() => {
      element2.classList.toggle('opacity')
    }, 500);
  }
}
