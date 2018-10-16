import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconizedProfileCardComponent } from './iconized-profile-card.component';

describe('IconizedProfileCardComponent', () => {
  let component: IconizedProfileCardComponent;
  let fixture: ComponentFixture<IconizedProfileCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconizedProfileCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconizedProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
