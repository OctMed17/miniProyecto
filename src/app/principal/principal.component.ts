import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
 alumnoComp = [

 ];
 currentAlumno = {
  nombreAlumno: null,
  cal: null
};
  constructor(public studentService : StudentServiceService) {
    this.alumnoComp=  studentService.obtenerAlumnos();
    }

    seleccionarAlumno(alumno) {
      this.currentAlumno = alumno;
    }

    agregarAlumno() {
      this.studentService.agregarAlumno(this.currentAlumno);
    }
    eliminarAlumno(i){
      this.studentService.eliminarAlumno(i);
    }
  ngOnInit() {
  }

}
