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
  user = {name: '', surname: '', password: '', role: false, state: false};
  constructor(private studentService: StudentService, private subjectService: SubjectService) {}
  addStudent(name: string, surname: string, password: string, role: string) {
    this.user.name = name;
    this.user.surname = surname;
    this.user.password = password;
    if (role == '1'){
      this.user.role = true;
    } else{
      this.user.role = false;
    }
        console.log(this.user);
    this.studentService.addStudent(this.user).subscribe(
      (data) => { console.log(data);
        window.location.reload(); }
    );
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
