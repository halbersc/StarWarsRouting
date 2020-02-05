import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  endpoint = "starships/";

  constructor(public httpClient: HttpClient) {

  }

  getStarships(): Observable <any> {
    return this.httpClient.get (environment.URL_SWAPI + this.endpoint);
  }

  getOneStarship(idStarship: number): Observable <any> {
    return this.httpClient.get (environment.URL_SWAPI + this.endpoint + idStarship);
  }
}
