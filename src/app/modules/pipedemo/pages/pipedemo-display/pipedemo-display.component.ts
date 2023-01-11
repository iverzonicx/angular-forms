import { Component } from '@angular/core';

@Component({
  selector: 'app-pipedemo-display',
  templateUrl: './pipedemo-display.component.html',
  styleUrls: ['./pipedemo-display.component.scss']
})
export class PipedemoDisplayComponent {
  myDate = new Date()
  myString = 'Jason Lee'
  amount = 123.456789
  myPercent = 0.323556689

  myNumber = 5
}
