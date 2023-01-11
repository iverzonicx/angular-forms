import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipedemoDisplayComponent } from './pipedemo-display.component';

describe('PipedemoDisplayComponent', () => {
  let component: PipedemoDisplayComponent;
  let fixture: ComponentFixture<PipedemoDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipedemoDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipedemoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
