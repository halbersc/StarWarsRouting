import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  endpoint = "films/";

  constructor(public httpClient: HttpClient) { 

  }

  getFilms(): Observable <any> {
    return this.httpClient.get (environment.URL_SWAPI + this.endpoint);
  }

  getFilm(idFilm: number): Observable <any> {
    return this.httpClient.get (environment.URL_SWAPI + this.endpoint + idFilm);
  }

}
