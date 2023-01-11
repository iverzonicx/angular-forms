import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformDisplayComponent } from './reactiveform-display.component';

describe('ReactiveformDisplayComponent', () => {
  let component: ReactiveformDisplayComponent;
  let fixture: ComponentFixture<ReactiveformDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveformDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveformDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
