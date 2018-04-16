import {Component} from '@angular/core';
import {Student} from '../../classes/student.model';
import {Subject} from '../../classes/subject.model';
import { StudentService } from '../../services/student.service';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [StudentService, SubjectService]
})
export class LoginFormComponent {
  student = new Student('', '', {home: '', work: ''}, '');
  subject = new Subject('', '', '', [], '');
  user = {username: '', password: '', name: '', mail: ''};
  constructor(private studentService: StudentService, private subjectService: SubjectService) {}
  addStudent(username: string, password: string, name: string, email: string) {
    this.user.name = name;
    this.user.username = username;
    this.user.password = password;
    this.user.mail = email;
    console.log(this.user);
    this.studentService.addStudent(this.user).subscribe(
      (data) => console.log(data));
  }
  addSubject(name: string, quatri: string, studies: string, studentId: string, id: string) {
    this.subject.name = name;
    this.subject.quatri = quatri;
    this.subject.studies = studies;
    this.subject.studentId.concat(studentId);
    this.subject._id = id;
    console.log(this.subject);
    this.subjectService.addSubject(this.subject).subscribe(
      (data) => console.log(data));
  }
}
