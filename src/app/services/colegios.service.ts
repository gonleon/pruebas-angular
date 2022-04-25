import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColegiosService {

  colegios: string[] = ['colegio uno', 'colegio dos'];

  constructor() { 
    console.log("Iniciando el servicio de colegios");
  }

  lista(): string[] {
    return this.colegios;
  }

}
