import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  public demos: any = [
      {
        text: '4D Simulation',
        route: '/schedule-simulation'
      },
      {
        text: 'Test',
        route: '/test'
      }
    ];

  // Returns demos in alphabetic order
  public getDemos(){
    // const keys = Object.keys(this.demos);
    // const demoObject: any = {};

    // keys.forEach((key: any) => {
    //   demoObject[key] = this.demos[key].sort((a: any, b: any) => a.text.localeCompare(b.text));
    // });

    return this.demos;
  }
}
