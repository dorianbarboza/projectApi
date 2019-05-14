import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  public url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost/rest/index.php/AppMusic_WS/";
    console.log('get service listo');
  }

  getCanciones(){
   return this.http.get(this.url+'getcanciones');
 }

}
