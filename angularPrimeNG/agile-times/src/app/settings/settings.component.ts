import { Component, OnInit } from '@angular/core';
import {StatisticsComponent} from '../statistics/statistics.component'
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  colour="lightgreen";
  statsValue ="40"
  upTime ="40 Hours"

  constructor() { }

  ngOnInit() {
  }

}
