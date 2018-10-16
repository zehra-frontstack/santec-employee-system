import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplodedLoginComponent } from './exploded-login.component';

describe('ExplodedLoginComponent', () => {
  let component: ExplodedLoginComponent;
  let fixture: ComponentFixture<ExplodedLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExplodedLoginComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplodedLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
