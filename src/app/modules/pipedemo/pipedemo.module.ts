import { PipedemoRoutingModule } from './pipedemo-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipedemoDisplayComponent } from './pages/pipedemo-display/pipedemo-display.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PipedemoDisplayComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PipedemoRoutingModule
  ]
})
export class PipedemoModule { }
