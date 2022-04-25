import { Component, OnInit } from '@angular/core';
import { ColegiosService } from '../services/colegios.service';

@Component({
  selector: 'app-colegios',
  templateUrl: './colegios.component.html',
  styleUrls: ['./colegios.component.css']
})
export class ColegiosComponent implements OnInit {

  colegios: string[] = [];

  constructor(private colegiosService: ColegiosService) { }

  ngOnInit(): void {
    this.colegios = this.colegiosService.lista();
  }

  agregarColegio():void {
    this.colegios.push(`Colegio ${this.colegios.length+1}`);
    
  }
  borrarColegio() {
    this.colegios.pop();
  }

}
