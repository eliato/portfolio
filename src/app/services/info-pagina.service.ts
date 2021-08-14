import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: any = {};
  cargada = false;

  constructor( private http: HttpClient ) { 
    //console.log('Servicio Listo');

    //leer Json
    this.http.get('assets/data/data-pagina.json')
    .subscribe( resp => {
      this.cargada = true;
      this.info = resp;
      console.log(resp);
    });
  }
}
