import {Component} from '@angular/core';
import {Subject} from '../../classes/subject.model';
import {SubjectService} from '../../services/subject.service';
import {Student} from '../../classes/student.model';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})

export class SubjectListComponent {
  subject = new Subject('', '', '', [], '');
  student = new Student('', '', {home: '', work: ''}, '');
  constructor(private subjectService: SubjectService) {
  }
  sub: any;
  data: any;
  students: any;
  idd: string;
  showSubject() {
    this.subjectService.getSubject().subscribe(
      (data) => {
        this.sub = data;
        console.log(data);
      });
  }
  deleteSubject(username: string, index: number) {
    this.subjectService.deleteSubject(username).subscribe(
      (data) => {
        console.log(data);
        this.sub.splice(index, 1);
      });
  }
  studentInfo(id: string, name: string, address: string, tlfhome: string, tlfwork: string, subjectId: string, subjectName: string) {
    this.student._id = id;
    this.idd = id;
    this.student.name = name;
    this.student.address = address;
    this.student.phone = { home: tlfhome, work: tlfwork};
    this.subject._id = subjectId;
    this.subject.name = subjectName;
    this.subject.studentId.push(this.idd);
    console.log(this.student);
    console.log(this.subject);
  }
  deleteStudentFromSubject(subjectId: string, subjectName: string, studentId: string) {
    console.log('ESTEEE:' + subjectId + subjectName + studentId);
    this.subjectService.deleteStudentSubjectApi(this.subject).subscribe(
      (data) => {
        console.log(data);
      });
    this.subject.studentId.pop();
  }
  search(name: string) {
    this.subjectService.searchSubject(name).subscribe(
      (data) => {
        this.sub = data;
        console.log(data);
      });
  }
  searchQuatri(quatri: string) {
    this.subjectService.searchSubjectQuatri(quatri).subscribe(
      (data) => {
        this.sub = data;
        console.log(data);
      });
  }
  searchStudies(studies: string) {
    this.subjectService.searchSubjectStudies(studies).subscribe(
      (data) => {
        this.sub = data;
        console.log(data);
      });
  }
  ordenar() {
    this.subjectService.getSubject().subscribe(
      (data) => {

        this.data = data.sort();
        this.data.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        this.sub = this.data;
        console.log(data);
        console.log(this.sub);
      });
  }
}
