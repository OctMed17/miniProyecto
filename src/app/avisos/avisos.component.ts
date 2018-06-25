import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent implements OnInit {
  images=[
    'http://via.placeholder.com/1300x300',
    'http://via.placeholder.com/1300x300',
    'http://via.placeholder.com/1300x300'

  ]; 
  constructor() { }

  ngOnInit() {
  }


}
