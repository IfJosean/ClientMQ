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
  userM = {name: '', surname: '', password: '', role: false, state: false};
  userD = {name: '', surname: '', password: '', role: false, state: false};
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

  searchName(name: string) {
    this.subjectService.searchName(name).subscribe(
      (data) => {
        this.sub = data;
        console.log(data);
      });
  }

  searchSurname(surname: string) {
    this.subjectService.searchSurname(surname).subscribe(
      (data) => {
        this.sub = data;
        console.log(data);
      });
  }

  searchRole(role: string) {
      this.subjectService.searchRole(role).subscribe(
        (data) => {
          this.sub = data;
          console.log(data);
        });
  }

  searchState(state: string) {
      this.subjectService.searchState(state).subscribe(
        (data) => {
          this.sub = data;
          console.log(data);
        });
    }

  userClickedM(user: any) {
    this.userM = user;
  }
  modifyUser(name: string, surname: string, role: string) {
    const oldName = this.userM.name;
    this.userM.name = name;
    this.userM.surname = surname;
    if (role === '1') {
      this.userM.role = true;
    }else {
      this.userM.role = false;
    }

    this.subjectService.modifyUser(this.userM, oldName).subscribe(
      (data) => {
        console.log(data);
        window.location.reload();
      });
  }

  deleteClicked (user: any) {
    this.userD = user;
  }
  deleteUser(user: any) {
    this.userD = user;
    this.subjectService.deleteUser(this.userD).subscribe(
      (data) => {
        console.log(data);
        window.location.reload();
      });
  }
}

