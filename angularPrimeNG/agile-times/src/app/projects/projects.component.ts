import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectForm: FormGroup;
  minProjectDate = new Date();

  allDevs = [

    { label: 'Jill', value: 'Jill Cool' },
    { label: 'Joe', value: 'Joe Cool' },
    { label: 'Mary', value: 'Mary Cool' },
    { label: 'Susan', value: 'Susan Jones' },
    { label: 'Phil', value: 'Phil Stephens' },
    { label: 'Karen', value: 'Karen Phillips' },
    { label: 'Chris', value: 'Chris Hampton' },
    { label: 'Si', value: 'Si Chew' },
    { label: 'Terri', value: 'Terri Smith' }

  ]
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

    this.projectForm = this.fb.group({
      projectId: ['', [Validators.required, Validators.minLength(5),Validators.maxLength(10)]],
      description: ['My Project', [Validators.required, Validators.minLength(5),Validators.maxLength(140)]],
      startDate: [new Date(), [Validators.required]],
      projectType: ['B'],
      selectDevs:[''],
      rating:[3],
      slider:[3],



    });
  }

  hasFormErrors() {
    return !this.projectForm.valid;
  }
  onSubmit() {
    console.log("form Submitted for sanitation");
    alert(JSON.stringify(this.projectForm.value));

  }

  // fieldErrors(field: string) {
  //   let controlState = this.projectForm.controls[field];
  //   return (controlState.dirty && controlState.errors) ? controlState.errors :
  //     null;
  // }
}
