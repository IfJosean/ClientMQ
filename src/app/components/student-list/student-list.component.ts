import {Component} from '@angular/core';
import {Student} from '../../classes/student.model';
import {StudentService} from '../../services/student.service';
import {SubjectService} from '../../services/subject.service';
import {Subject} from '../../classes/subject.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent {
  student = new Student('', '', {home: '', work: ''}, '');
  students: any;
  subject = new Subject('', '', '', [], '');
  sub: any;
  idd: string;
  id: string;
  constructor(private studentService: StudentService, private subjectService: SubjectService) {
  }
  showStudents() {
    this.studentService.getStudent().subscribe(
      (data) => {
        this.students = data;
        console.log(data);
      });
  }
  deleteStudent(id: string, index: number) {
    this.student._id = id;
    console.log(id);
    this.studentService.deleteStudent(id).subscribe(
      (data) => {
        console.log(data);
        this.students.splice(index, 1);
      });
  }
  passID(id: string, index: number) {
    this.student._id = id;
    this.idd = id;
    this.subjectService.getSubject().subscribe(
      (data) => {
        this.sub = data;
        console.log(data);
      });
  }
  addStudentToSubject(idSubject: string, nameSubject: string, quatri: string, studies: string, index: number) {
    this.subject._id = idSubject;
    this.subject.name = nameSubject;
    this.subject.quatri = quatri;
    this.subject.studies = studies;
    this.subject.studentId.push(this.idd);
    console.log('ID: ' + this.idd);
    this.subjectService.modifySubject(this.subject).subscribe(
      (data) => {
        console.log(data);
      });
    this.subject.studentId.pop();
  }
  modalEditStudent(id: string) {
    this.id = id;
  }
  editStudent(name: string, address: string, tlfhome: string, tlfwork: string) {
    this.student.name = name;
    this.student.address = address;
    this.student.phone = { home: tlfhome, work: tlfwork};
    this.student._id = this.id;
    console.log(this.student);
    this.studentService.editionStudent(this.student).subscribe(
      (data) => console.log(data));
  }
  search(name: string) {
    this.studentService.searchStudent(name).subscribe(
      (data) => {
        this.students = data;
        console.log(data);
      });
  }
}
