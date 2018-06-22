import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { AvisosComponent } from './avisos/avisos.component';
import {RouterModule, Routes} from'@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
const appRoutes : Routes=[
  {path:'', component: LoginComponent},
  {path:'principal', component: PrincipalComponent},
  {path:'student',component:StudentComponent},
  {path:'avisos/:id',component:AvisosComponent},
  {path:'teacher', component:TeacherComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    LoginComponent,
    PrincipalComponent,
    AvisosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
