// @ts-ignore
import { Component } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   centers = [
    { name: 'مرکز شماره 1', temp1: 20, temp2: 26, hum1: 30 },
    { name: 'مرکز شماره 2', temp1: 22, temp2: 28, hum1: 35 },
    { name: 'مرکز شماره 3', temp1: 21, temp2: 27, hum1: 33 }
  ];
}
