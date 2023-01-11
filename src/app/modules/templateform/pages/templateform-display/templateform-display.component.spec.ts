import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateformDisplayComponent } from './templateform-display.component';

describe('TemplateformDisplayComponent', () => {
  let component: TemplateformDisplayComponent;
  let fixture: ComponentFixture<TemplateformDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateformDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateformDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
