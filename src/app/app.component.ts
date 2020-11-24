import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  secretParagraph: string = 'Art Lover For Life!';
  displayDetails: boolean = false;
  // logOfClicks: number[] = [];
  logOfClicks: Date[] = [];

  toggleDetails() {
    this.displayDetails = !this.displayDetails;
    // this.logOfClicks.push(this.logOfClicks.length + 1);
    this.logOfClicks.push(new Date());
  }

  // setBackgroundColor(click: number) {
  //   return click >= 5 ? 'blue' : 'transparent';
  // }
}
