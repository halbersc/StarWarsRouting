import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { OneFilmComponent } from './one-film/one-film.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlanetsComponent } from './planets/planets.component';
import { OnePlanetComponent } from './one-planet/one-planet.component';
import { PeopleComponent } from './people/people.component';
import { OnePersonComponent } from './one-person/one-person.component';
import { SpeciesComponent } from './species/species.component';
import { OneSpecieComponent } from './one-specie/one-specie.component';
import { StarshipsComponent } from './starships/starships.component';
import { OneStarshipComponent } from './one-starship/one-starship.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { OneVehicleComponent } from './one-vehicle/one-vehicle.component';


const routes: Routes = [
  { path: '', redirectTo : 'home', pathMatch:'full' },
  { path: 'films', component: FilmsComponent  },
  { path: 'onefilm', component: OneFilmComponent  },
  { path: 'home', component: HomeComponent  },
  { path: 'planets', component: PlanetsComponent  },
  { path: 'oneplanet', component: OnePlanetComponent  },
  { path: 'people', component: PeopleComponent  },
  { path: 'oneperson', component: OnePersonComponent  },
  { path: 'species', component: SpeciesComponent  },
  { path: 'onespecie', component: OneSpecieComponent  },
  { path: 'starships', component: StarshipsComponent  },
  { path: 'onestarship', component: OneStarshipComponent  },
  { path: 'vehicles', component: VehiclesComponent  },
  { path: 'onevehicle', component: OneVehicleComponent  },
  { path: 'not-found', component: AppComponent  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
