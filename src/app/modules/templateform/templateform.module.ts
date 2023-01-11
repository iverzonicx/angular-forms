import { TemplateformRoutingModule } from './templateform-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateformDisplayComponent } from './pages/templateform-display/templateform-display.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TemplateformDisplayComponent
  ],
  imports: [
    TemplateformRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class TemplateformModule { }
