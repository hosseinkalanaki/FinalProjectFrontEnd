import { Sensor } from "./sensor";

export class Center {
  public constructor(centerName: string) {
    this.centerName = centerName;
    this.sensors = [];
  }

  public centerName: string;
  public sensors: Sensor[];
}
