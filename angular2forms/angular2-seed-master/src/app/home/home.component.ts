import { Component } from '@angular/core';
import { Employee } from '../model/employee.model';
import { FormPoster } from '../services/form-poster.service';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages = ["English", "Spanish", "Other"];
  model = new Employee("", "", true, "", 'default');
  hasPrimaryLanguageError = false;

  constructor(private formPoster:FormPoster) {

  }

  firstNameToUpperCase(value: string) {
    if (value.length > 0)

      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    else
      this.model.firstName = value;

  }
  // validatePrimaryLanguage(event) {
  validatePrimaryLanguage(value) {

    // if (this.model.primaryLanguage === 'default') {
    if (value === 'default') {

      this.hasPrimaryLanguageError = true;
    }
    else {
      this.hasPrimaryLanguageError = false;
    }

  }

  submitForm(form:NgForm) {
    // console.log(this.model);
    // console.log(form.value);
    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if(this.hasPrimaryLanguageError)
      return;
    this.formPoster.postEmployeeForm(this.model)
      .subscribe(
        data=>console.log('SUCESSS', data),
      err=>console.log('error',err));

  }

}


