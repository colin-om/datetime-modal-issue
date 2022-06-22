import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  modes = ['date' , 'date-time' , 'month' , 'month-year' , 'time' , 'time-date' , 'year'];

}
