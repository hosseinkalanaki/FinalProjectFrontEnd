export class Sensor {
  public constructor(
    type: string,
    name: string,
    hasAlarm: boolean,
    value: number
  ) {
    this.type = type;
    this.name = name;
    this.hasAlarm = hasAlarm;
    this.value = value;
  }

  public type: string;
  public name: string;
  public hasAlarm: boolean;
  public value: number;
}
