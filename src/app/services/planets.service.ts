import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

endpoint = "planets/";

  constructor(public httpClient: HttpClient) { 

  }

  getPlanets(): Observable <any> {
    return this.httpClient.get (environment.URL_SWAPI + this.endpoint);
  }

  getOnePlanet(idPlanet: number): Observable <any> {
    return this.httpClient.get (environment.URL_SWAPI + this.endpoint + idPlanet);
  }

}
