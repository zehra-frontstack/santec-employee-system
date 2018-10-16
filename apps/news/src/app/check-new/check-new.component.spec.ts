import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckNewComponent } from './check-new.component';

describe('CheckNewComponent', () => {
  let component: CheckNewComponent;
  let fixture: ComponentFixture<CheckNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckNewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
