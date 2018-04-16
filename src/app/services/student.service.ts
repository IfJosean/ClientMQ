import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Student} from '../classes/student.model';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {
  url = 'http://localhost:3000/student/api';

  constructor(private http: Http) {
  }
  addStudent(student: any): Observable<Response> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3000/student/users/insert', student, options)
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  deleteStudent(id: string) {
    return this.http.delete(this.url + '/' + id)
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  getStudent(): Observable<Comment[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    // ...using get request
    return this.http.get(this.url + '/todos', options)
    // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  editionStudent(student: Student) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    console.log(student._id);
    return this.http.post(this.url + '/edit/' + student._id, student, options)
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }
  searchStudent(name: string) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    console.log(name);
    // ...using get request
    return this.http.get(this.url + '/' + name, options)
    // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }
}
