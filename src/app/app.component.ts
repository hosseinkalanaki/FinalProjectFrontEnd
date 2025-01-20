import { Component, OnInit } from '@angular/core';
import { Center } from './models/center';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  public centers:Center[]=[
    {
        "centerName":"مرکز شماره 1",
        "sensors":[
            {
                "type":"Temporary",
                "name":"دمای 1",
                "hasAlarm":true,
                "value":25.2
            },
            {
                "type":"Temporary",
                "name":"دمای 2",
                "hasAlarm":false,
                "value":24.5
            },
            {
                "type":"Humidity",
                "name":"رطوبت کل مرکز",
                "hasAlarm":false,
                "value":50
            }
        ]
    },
    {
        "centerName":"مرکز شماره 2",
        "sensors":[
            {
                "type":"Temporary",
                "name":"دمای 1",
                "hasAlarm":false,
                "value":12.1
            },
            {
                "type":"Temporary",
                "name":"دمای 2",
                "hasAlarm":false,
                "value":11.2
            },
            {
                "type":"Humidity",
                "name":"رطوبت کل مرکز",
                "hasAlarm":false,
                "value":40
            }
        ]
    },
    {
        "centerName":"مرکز شماره 3",
        "sensors":[
            {
                "type":"Temporary",
                "name":"دمای 1",
                "hasAlarm":false,
                "value":21.8
            },
            {
                "type":"Temporary",
                "name":"دمای 2",
                "hasAlarm":false,
                "value":19.2
            },
            {
                "type":"Humidity",
                "name":"رطوبت کل مرکز",
                "hasAlarm":false,
                "value":20
            }
        ]
    },
    {
        "centerName":"مرکز شماره 4",
        "sensors":[
            {
                "type":"Temporary",
                "name":"دمای 1",
                "hasAlarm":false,
                "value":31.2
            },
            {
                "type":"Temporary",
                "name":"دمای 2",
                "hasAlarm":false,
                "value":27.3
            },
            {
                "type":"Humidity",
                "name":"رطوبت کل مرکز",
                "hasAlarm":false,
                "value":40
            }
        ]
    },
    {
        "centerName":"مرکز شماره 5",
        "sensors":[
            {
                "type":"Temporary",
                "name":"دمای 1",
                "hasAlarm":false,
                "value":24.1
            },
            {
                "type":"Temporary",
                "name":"دمای 2",
                "hasAlarm":false,
                "value":23.5
            },
            {
                "type":"Humidity",
                "name":"رطوبت کل مرکز",
                "hasAlarm":false,
                "value":50
            }
        ]
    },
    {
        "centerName":"مرکز شماره 6",
        "sensors":[
            {
                "type":"Temporary",
                "name":"دمای 1",
                "hasAlarm":false,
                "value":24.1
            },
            {
                "type":"Temporary",
                "name":"دمای 2",
                "hasAlarm":false,
                "value":23.5
            },
            {
                "type":"Humidity",
                "name":"رطوبت کل مرکز",
                "hasAlarm":false,
                "value":50
            }
        ]
    },
    {
        "centerName":"مرکز شماره 7",
        "sensors":[
            {
                "type":"Temporary",
                "name":"دمای 1",
                "hasAlarm":false,
                "value":24.1
            },
            {
                "type":"Temporary",
                "name":"دمای 2",
                "hasAlarm":false,
                "value":23.5
            },
            {
                "type":"Humidity",
                "name":"رطوبت کل مرکز",
                "hasAlarm":false,
                "value":50
            }
        ]
    },
    {
        "centerName":"مرکز شماره 8",
        "sensors":[
            {
                "type":"Temporary",
                "name":"دمای 1",
                "hasAlarm":false,
                "value":24.1
            },
            {
                "type":"Temporary",
                "name":"دمای 2",
                "hasAlarm":false,
                "value":23.5
            },
            {
                "type":"Humidity",
                "name":"رطوبت کل مرکز",
                "hasAlarm":false,
                "value":50
            }
        ]
    }
];

  constructor() {
  }
  response: any;

  ngOnInit(): void {
    //this.getInitialData();
  }
  async getInitialData(): Promise<void> {
    const response = await fetch('./api-path', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      this.response = await response.json(); // Parse JSON response
      console.log(this.response);
    } else {
      console.error('Error:', response.statusText);
    }
  }

}
