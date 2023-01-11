import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveformDisplayComponent } from './pages/reactiveform-display/reactiveform-display.component';

const routes: Routes = [
  {
    path: '',
    component: ReactiveformDisplayComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ReactiveformRoutingModule { }
