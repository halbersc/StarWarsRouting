import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {
endpoint = "species/";

  constructor(public httpClient: HttpClient) { 

  }

  getSpecies(): Observable <any> {
    return this.httpClient.get (environment.URL_SWAPI + this.endpoint);
  }

  getOneSpecie(idSpecie: number): Observable <any> {
    return this.httpClient.get (environment.URL_SWAPI + this.endpoint + idSpecie);
  }
}
