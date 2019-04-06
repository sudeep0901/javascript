import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
declare var moment: any;

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {


  private userTimeData = [

    { day: 'Monday', startTime: '9:00', endTime: '17:00', project: 'Agile Times', category: 'Frontend' },
    { day: 'Tuesday', startTime: '9:00', endTime: '17:00', project: 'Payroll App', category: 'Backend' },
    { day: 'Wednesday', startTime: '9:00', endTime: '17:00', project: 'Point of Sale App', category: 'Operations' },
    { day: 'Thursday', startTime: '9:00', endTime: '17:00', project: 'Mobile App', category: 'Planning' },
    { day: 'Friday', startTime: '9:00', endTime: '17:00', project: 'Agile Times', category: 'Requirements' },

  ];

  daysOfWeek = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'
  ];

  day = 'Monday';
  dateAndMonth = moment().day(this.day).format('MMMM Do, YYYY');

  displayEditDialog = false;
  displayPageIndex = 0;
  
  dialogPages: MenuItem[] = [
    {label: 'time'},
    {label: 'Project'},
    {label: 'Place'},
    {label: 'People'}
  ];
  getTimesForDay(tabName: string) {
    return this.userTimeData.filter((row) => {
      return row.day === tabName;
    });
  }

  onChangeTabs(event) {
    console.log(event);
    const index = event.index;
    this.day = this.daysOfWeek[index];
    this.dateAndMonth = moment().day(this.day).format('MMMM Do, YYYY');
  }

  ngOnInit() {
  }

  cancelDialog() {
    this.displayEditDialog = false;
  }

  saveNewEntry() {
    console.log('new Entry saved');
  }

}
