import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentServiceService } from '../student-service.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  pos:number;
  alumnos=[];
  constructor(public activatedRoute: ActivatedRoute, public StudentService: StudentServiceService) { 
    this.pos = this.activatedRoute.snapshot.params['id'];
    this.alumnos = this.StudentService.obtenerAlumnos();
  }


  ngOnInit() {
  }
}
