import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {StudentListComponent} from './components/student-list/student-list.component';
import {SubjectListComponent} from './components/subject-list/subject-list.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, LoginFormComponent, StudentListComponent, SubjectListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
