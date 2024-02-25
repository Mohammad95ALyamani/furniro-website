import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuniroFurnitureComponent } from './funiro-furniture.component';

describe('FuniroFurnitureComponent', () => {
  let component: FuniroFurnitureComponent;
  let fixture: ComponentFixture<FuniroFurnitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuniroFurnitureComponent]
    });
    fixture = TestBed.createComponent(FuniroFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
