import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Employee } from '../model/employee.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FormPoster {

  constructor(private http: Http) {
  }
  postEmployeeForm(employee: Employee): Observable<any> {
    console.log('posting employee: ', employee);
    let body = JSON.stringify(employee);
    let headers = new Headers({ 'Content-Type': "application/json" });
    let options = new RequestOptions({ headers: headers });

    return this.http.post("http://localhost:3100/postemployee", body, options)
      .map(this.extractData)
      .catch(this.handleError)
  }
  private extractData(res: Response) {

    let body = res.json();
    return body.fields || {};

  }
  private handleError(error, any) {
    console.error("post error: ", error);
    return Observable.throw(error.statusText);

  }
}
