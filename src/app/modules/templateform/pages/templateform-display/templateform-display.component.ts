import { Component } from '@angular/core';
import { Hero } from '../../models/hero';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-templateform-display',
  templateUrl: './templateform-display.component.html',
  styleUrls: ['./templateform-display.component.scss']
})
export class TemplateformDisplayComponent {
  powers = ['Zap', 'Web', 'Bat Mobile']
  model = new Hero(20, '', this.powers[1], 'Peter Parker')

  onSubmit = (heroForm: NgForm) => {
    // console.log(this.model)
    // console.log(heroForm.value)
    console.log(heroForm)
  }

}
