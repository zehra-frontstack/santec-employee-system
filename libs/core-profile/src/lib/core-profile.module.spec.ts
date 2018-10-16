import { async, TestBed } from '@angular/core/testing';
import { CoreProfileModule } from './core-profile.module';

describe('CoreProfileModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreProfileModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CoreProfileModule).toBeDefined();
  });
});
