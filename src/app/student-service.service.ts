import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor() { 
  }
  alumnos = [
    {nombreAlumno: 'Anita', cal: 72},
    {nombreAlumno: 'Juanito', cal: 68}
  ];

  obtenerAlumnos(){
    return this.alumnos;
  }
  agregarAlumno(alumno){
    this.alumnos.push(alumno);
  }
  eliminarAlumno(i){
    this.alumnos.splice(i,1);
  }
}
