import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSponserComponent } from './shop-sponser.component';

describe('ShopSponserComponent', () => {
  let component: ShopSponserComponent;
  let fixture: ComponentFixture<ShopSponserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopSponserComponent]
    });
    fixture = TestBed.createComponent(ShopSponserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
