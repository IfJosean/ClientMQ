import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Student} from '../classes/student.model';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Subject} from '../classes/subject.model';

@Injectable()
export class SubjectService {
  url = 'http://localhost:3000/subject/api';

  constructor(private http: Http) {
  }
  addSubject(subject: Subject): Observable<Response> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.url + '/', subject, options)
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  deleteSubject(username: string) {
    return this.http.delete('http://localhost:3000/student/users/delete/' + username)
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  modifySubject(subject: Subject) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    console.log(subject);
    return this.http.post(this.url + '/' + subject._id, subject, options)
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  getSubject(): Observable<Comment[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    // ...using get request
    return this.http.get('http://localhost:3000/student/users/select', options)
    // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  deleteStudentSubjectApi(subject: Subject) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    console.log(subject);
    return this.http.post(this.url + '/deleteStudentSubject/' + subject._id, subject, options)
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  searchSubject(name: string) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    console.log(name);
    // ...using get request
    return this.http.get(this.url + '/editSubject/' + name, options)
    // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }
  searchSubjectQuatri(quatri: string) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    console.log(quatri);
    // ...using get request
    return this.http.get(this.url + '/editSubjectQuatri/' + quatri, options)
    // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }
  searchSubjectStudies(studies: string) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    console.log(studies);
    // ...using get request
    return this.http.get(this.url + '/editSubjectStudies/' + studies, options)
    // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  //funciones buscador filtros
  searchName(name: string) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    console.log(name);
    // ...using get request
    return this.http.get(  'http://localhost:3000/student/users/searchName/' + name, options)
    // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }
  searchSurname(name: string) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    console.log(name);
    // ...using get request
    return this.http.get(  'http://localhost:3000/student/users/searchSurname/' + name, options)
    // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }
  searchRole(name: string) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    console.log(name);
    // ...using get request
    return this.http.get(  'http://localhost:3000/student/users/searchRole/' + name, options)
    // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }
  searchState(name: string) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    console.log(name);
    // ...using get request
    return this.http.get(  'http://localhost:3000/student/users/searchState/' + name, options)
    // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

}
