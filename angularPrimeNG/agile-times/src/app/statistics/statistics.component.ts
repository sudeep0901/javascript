import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  @Input() icon:string="fa-cloud-download";
  @Input() label:string ="No Uptime";
  @Input() value:string ="No Value";
  @Input() colour:string ="lightgreen";

  constructor() { }

  ngOnInit() {
  }

}
