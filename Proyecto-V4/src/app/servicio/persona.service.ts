import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IPersona } from '../persona/interfaz/IPersona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private url:string = "http://localhost:3000/persona";
  private cliente:HttpClient;

  constructor(moduloHttp: HttpClient) {
    this.cliente = moduloHttp;
   }

   public listarPersona (): Observable<Array<IPersona>>   {
     return this.cliente.get<Array<IPersona>>(this.url);
   }

   public agregarPersona (personaNueva:IPersona):Observable<IPersona>{
    return this.cliente.post<IPersona>(this.url,JSON.stringify(personaNueva), {
      headers: {
        "Content-Type":"aplication/json"
      }
    }); 
   }
  
}
