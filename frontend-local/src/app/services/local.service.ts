import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Local } from '../models/Local';
import { BehaviorSubject, Observable } from 'rxjs';
import { GLOBAL } from './global'

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  
  private authenticate = new BehaviorSubject<{}>(null); //Creamos una nueva instancia de la variable pra poder utilizarla. <{}> => tipo de dato (null)=> Valor inicial
  authenticate$ = this.authenticate.asObservable();//Esta variable está suscrita, esto quiere decir que podrá estar escuchando todos los cambios que tenga

  public apiURL: string;

  constructor(
    private http: HttpClient
  ) {
    this.authenticate.next(this.infoUser()) //Validamos si el usuario inició sesión, esto nos funcionará son importar que recarguemos el navegador,
    this.apiURL = GLOBAL.url
  }

  createUser(formUser) {
    return this.http.post<Local>(`${this.apiURL}/register`, formUser);
  }

  updateUser(formUser, idUser) {
    return this.http.put<Local>(`${this.apiURL}/update/${idUser}`, formUser);
  }


  login(formLogin) {
    return this.http.post<Local>(`${this.apiURL}/login`, formLogin);
  }

  /**
   * Metodo para almacenar el token de cuando el usuario hacen login
   * @param token 
   */
  saveToken(token) {
    localStorage.setItem('token', token);
    this.authenticate.next(this.infoUser())
  }

  /**
   * Obtener el token.
   */
  getToken() {
    return localStorage.getItem('token');
  }

  /**
   * Función para validar si existe o no un token
   * @returns Boolean true o false
   */
  isAuthenticated() {
    /*if (this.getToken() !== null){
      return true;
    }else{
      return false;
    }*/
    return this.getToken() !== null;
  }

  infoUser() {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    let base64URL = token.split('.')[1];
    let base64 = base64URL.replace('-', '+').replace('_', '/'); //Nos permite decodificar la información mucho más facíl.

    return JSON.parse(this.b64DeconeUnicode(base64));
  }

  b64DeconeUnicode(str) {
    return decodeURIComponent(atob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

  removeToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('arregloSeriesFav');

    this.authenticate.next(null)
  }


  //metodo para tomar lo que ya está en la base de datos
  getProjects():Observable<any>{
    let headers= new HttpHeaders().set("Content-type", "application/json");

    return this.http.get(this.apiURL + "/locals", {headers: headers});
 }

 //metodo para mostrar un unico proyecto
 getProject(id): Observable<any>{
  let headers = new HttpHeaders().set("Content-type", "application/json");
  return this.http.get(this.apiURL + "/local/" + id, {headers: headers});
  
}




}
