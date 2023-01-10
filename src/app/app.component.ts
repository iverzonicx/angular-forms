import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-forms';
  myDate = new Date()
  myString = 'Jason Lee'
  amount = 123.456789
  myPercent = 0.323556689

  myNumber = 5
}
