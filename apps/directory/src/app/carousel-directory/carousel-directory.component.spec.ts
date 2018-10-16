import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselDirectoryComponent } from './carousel-directory.component';

describe('CarouselDirectoryComponent', () => {
  let component: CarouselDirectoryComponent;
  let fixture: ComponentFixture<CarouselDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselDirectoryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
