import { ReactiveformRoutingModule } from './reactiveform-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveformDisplayComponent } from './pages/reactiveform-display/reactiveform-display.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReactiveformDisplayComponent
  ],
  imports: [
    ReactiveformRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ReactiveformModule { }
