import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoredComponent } from './mentored.component';

describe('MentoredComponent', () => {
  let component: MentoredComponent;
  let fixture: ComponentFixture<MentoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MentoredComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
