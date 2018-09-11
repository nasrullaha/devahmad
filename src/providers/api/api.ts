import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiProvider {
 
  constructor(public http: HttpClient) { }
 
  getFilms() {
    return this.http.get('http://192.168.1.25:88/ci-restserver-master/index.php/ahmadapi');
    console.log(this.http.get('https://swapi.co/api/films'));
//return this.http.get('http://localhost/ci-restserver-master/index.php/ahmadapi');
    
  }
}