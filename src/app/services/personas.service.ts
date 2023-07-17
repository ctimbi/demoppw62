import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacto } from '../domain/contacto';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) { }

  save(contacto: Contacto) {
    return this.http.post<any>("http://localhost:8080/demo62/rs/clientes", contacto)
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/demo62/rs/clientes/all")
  }


}
