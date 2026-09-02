import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sabor } from '../modelos/sabor';

@Injectable({
  providedIn: 'root',
})
export class Sorvete {
  
  private apiUrl = "http://localhost:3001/sabores";


  constructor(private http:HttpClient) {  }

    getSabores():Observable<Sabor[]> {

      return this.http.get<Sabor[]>(this.apiUrl); // funçao que retorna uma lista de sabores GET

    }

  
}
