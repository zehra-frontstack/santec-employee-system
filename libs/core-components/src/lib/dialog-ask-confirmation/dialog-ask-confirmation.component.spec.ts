import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAskConfirmationComponent } from './dialog-ask-confirmation.component';

describe('DialogAskConfirmationComponent', () => {
  let component: DialogAskConfirmationComponent;
  let fixture: ComponentFixture<DialogAskConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAskConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAskConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
