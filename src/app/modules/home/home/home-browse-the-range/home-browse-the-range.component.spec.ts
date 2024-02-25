import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBrowseTheRangeComponent } from './home-browse-the-range.component';

describe('HomeBrowseTheRangeComponent', () => {
  let component: HomeBrowseTheRangeComponent;
  let fixture: ComponentFixture<HomeBrowseTheRangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBrowseTheRangeComponent]
    });
    fixture = TestBed.createComponent(HomeBrowseTheRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
