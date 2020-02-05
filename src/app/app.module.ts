import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { FilmsComponent } from './films/films.component';
import { HomeComponent } from './home/home.component';
import { PlanetsComponent } from './planets/planets.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipsComponent } from './starships/starships.component';
import { OneFilmComponent } from './one-film/one-film.component';
import { OneStarshipComponent } from './one-starship/one-starship.component';
import { OnePersonComponent } from './one-person/one-person.component';
import { OnePlanetComponent } from './one-planet/one-planet.component';
import { OneSpecieComponent } from './one-specie/one-specie.component';
import { OneVehicleComponent } from './one-vehicle/one-vehicle.component';


@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    FilmsComponent,
    HomeComponent,
    PlanetsComponent,
    VehiclesComponent,
    SpeciesComponent,
    StarshipsComponent,
    OneFilmComponent,
    OneStarshipComponent,
    OnePersonComponent,
    OnePlanetComponent,
    OneSpecieComponent,
    OneVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
