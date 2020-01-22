import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlanetsComponent } from './planets/planets.component';
import { PeopleComponent } from './people/people.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';


const routes: Routes = [
  { path: '', redirectTo : 'home', pathMatch:'full' },
  { path: 'films', component: FilmsComponent  },
  { path: 'home', component: HomeComponent  },
  { path: 'planets', component: PlanetsComponent  },
  { path: 'people', component: PeopleComponent  },
  { path: 'species', component: SpeciesComponent  },
  { path: 'starships', component: StarshipsComponent  },
  { path: 'vehicles', component: VehiclesComponent  },
  { path: 'not-found', component: AppComponent  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
