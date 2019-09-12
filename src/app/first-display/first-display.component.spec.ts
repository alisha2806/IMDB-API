import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDisplayComponent } from './first-display.component';

describe('FirstDisplayComponent', () => {
  let component: FirstDisplayComponent;
  let fixture: ComponentFixture<FirstDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
