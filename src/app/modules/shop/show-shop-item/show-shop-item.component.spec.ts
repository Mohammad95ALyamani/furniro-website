import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowShopItemComponent } from './show-shop-item.component';

describe('ShowShopItemComponent', () => {
  let component: ShowShopItemComponent;
  let fixture: ComponentFixture<ShowShopItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowShopItemComponent]
    });
    fixture = TestBed.createComponent(ShowShopItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
