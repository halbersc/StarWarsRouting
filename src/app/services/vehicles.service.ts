import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  endpoint = "vehicles/";

  constructor(public httpClient: HttpClient) { 

  }

  getVehicles(): Observable <any> {
    return this.httpClient.get (environment.URL_SWAPI + this.endpoint);
  }

  getOneVehicle(idVehicle: number): Observable <any> {
    return this.httpClient.get (environment.URL_SWAPI + this.endpoint + idVehicle);
  }


}
