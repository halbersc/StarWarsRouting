import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VehiclesService } from '../services/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  objVehicles: any[] = [];
  objResults: any[] = [];


  constructor(private VehiclesService: VehiclesService) { 

    VehiclesService.getVehicles().subscribe(
      (data) => {
        this.objVehicles = data;
        this.objResults = this.objVehicles['results']
      },
      (error) => {
        console.error(error);
      }
    )
  }

  ngOnInit() {

  }

}
