import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ AppService ]
})
export class HomeComponent implements OnInit {

  public demos: any = {};
  public selectedDemo: any = null;

  constructor(
    private _as: AppService
  ) {}

  ngOnInit(): void {
    this.demos = this._as.getDemos();
  }

}
