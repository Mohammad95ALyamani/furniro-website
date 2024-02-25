import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowShopItemDescComponent } from './show-shop-item-desc.component';

describe('ShowShopItemDescComponent', () => {
  let component: ShowShopItemDescComponent;
  let fixture: ComponentFixture<ShowShopItemDescComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowShopItemDescComponent]
    });
    fixture = TestBed.createComponent(ShowShopItemDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
