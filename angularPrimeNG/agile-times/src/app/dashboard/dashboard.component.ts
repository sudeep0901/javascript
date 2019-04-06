import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { element } from 'protractor';
import { UIChart } from 'primeng/primeng';
import { interval } from 'rxjs/observable/interval';



const DEFAULT_COLORS = ['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099',
  '#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E',
  '#316395', '#994499', '#22AA99', '#AAAA11', '#6633CC',
  '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC'];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent implements OnInit, AfterViewInit {

  ngAfterViewInit() {
    interval(3000).subscribe(() => {

      var hoursByTeam = this.hoursByTeamChartDataMixed.datasets;
      var randomised = hoursByTeam.map((dataset) => {
        dataset.data = dataset.data.map((hour) => hour * (Math.random() * 2));
      });
      console.log("refreshing chart");
    this.mixedChart.refresh();
    });

  }
  colour = "lightgreen";
  statsValue = "40"
  upTime = "Up Hours"


  @ViewChild("mixedChart") mixedChart: UIChart;

  hoursByProject = [
    { id: 1, name: 'Payroll App', hoursSpent: 8 },
    { id: 2, name: 'Agile Times App', hoursSpent: 16 },
    { id: 3, name: 'Point of Sale App', hoursSpent: 24 },
  ]

  // hoursByProjectChartData = {
  //   labels: ['Payroll App', "Agile Times App", 'Point of sale App'],
  //   datasets: [
  //     {
  //       data: [80, 6, 27],
  //       backgroundColor: ['#3366CC', '#DC3912', '#FF9900']
  //     }
  //   ]
  // }


  pieLabels = this.hoursByProject.map((proj) => proj.name);

  pieData = this.hoursByProject.map((proj) => proj.hoursSpent);

  pieColors = this.configureDafultColours(this.pieData);

  hoursByProjectChartData = {
    labels: this.pieLabels,
    datasets: [
      {
        data: this.pieData,
        backgroundColor: this.pieColors
      }
    ]
  }
  hoursByTeamChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: "Dev Team",
        backgroundColor: DEFAULT_COLORS[19],
        data: [65, 59, 80, 55, 67, 73]
      },
      {
        label: "opa Team",
        backgroundColor: DEFAULT_COLORS[18],
        data: [44, 63, 57, 90, 77, 70]
      }
    ]
  }

  hoursByTeamChartDataMixed = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: "Dev Team",
        type: 'bar',
        backgroundColor: DEFAULT_COLORS[9],
        data: [65, 59, 80, 55, 67, 73]
      },
      {
        label: "opa Team",
        type: 'line',
        backgroundColor: DEFAULT_COLORS[5],
        data: [44, 63, 57, 90, 77, 70]
      }
    ]
  }
  constructor() { }

  ngOnInit() {
  }

  private configureDafultColours(data: number[]): string[] {
    let customColours = [];
    if (data.length) {
      customColours = data.map((element, idx) => {
        // console.log(idx);
        // console.log(DEFAULT_COLORS.length);
        console.log("calcu:", idx, idx % DEFAULT_COLORS.length)
        return DEFAULT_COLORS[idx % DEFAULT_COLORS.length];
      });
      console.log(customColours);
      return customColours;
    }
  }

  onDataSelect($event) {
    console.log($event);
    let dataSetIndex = $event.element._datasetIndex;
    let dataItemIndex = $event.element._index;
    let labeClicked = this.hoursByTeamChartDataMixed.datasets[dataSetIndex].label;
    alert(labeClicked);

    let valueClicked = this.hoursByTeamChartDataMixed.datasets[dataSetIndex].data[dataItemIndex];
    console.log(labeClicked, valueClicked);


  }

  chartOptions = {

    title: {
      display: true,
      text: "Hours by Project"
    },
    legend: {
      position: 'bottom'
    }
  }
}
