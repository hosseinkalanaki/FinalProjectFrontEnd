import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tempStatus: string = '';
  humidityStatus: string = '';

  centers = [
    {name: 'مرکز شماره 1', temp1: 20, temp2: 26, hum: 30},
    {name: 'مرکز شماره 2', temp1: 22, temp2: 28, hum: 35},
    {name: 'مرکز شماره 3', temp1: 22, temp2: 28, hum: 35},
    {name: 'مرکز شماره 4', temp1: 50, temp2: 28, hum: 40},
    {name: 'مرکز شماره 5', temp1: 10, temp2: 28, hum: 41},
    {name: 'مرکز شماره 6 نمیدانم از نام مکان اطلاعی ندارم', temp1: 22, temp2: 28, hum: 35},
    {name: 'مرکز شماره 7 دارغوز آباد آفریقای جنوبی', temp1: 22, temp2: 28, hum: 50},
    {name: 'مرکز شماره 8 دارغوزآباد لس آنجلس', temp1: 21, temp2: 27, hum: 33}
  ];

  ngOnInit(): void {
    this.getInitialData();
  }

  public getInitialData() {
  }

  // @ts-ignore
  public changeStatus(temp: number | null, humidity: number | null):string {
    if (temp) {
      return  18 < temp && temp < 27 ? 'bg-label-success' : 'bg-label-danger';
    }
    if (humidity) {
      return 40 < humidity && humidity < 55 ? 'bg-label-info' : 'bg-label-danger';
    }
  }
}
