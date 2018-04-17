import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtonComponent } from './washington/washington.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'seattle',component: SeattleComponent },
  { path: 'sanjose',component: SanjoseComponent },
  { path: 'burbank',component: BurbankComponent },
  { path: 'dallas',component: DallasComponent },
  { path: 'washington',component: WashingtonComponent },
  { path: 'chicago',component: ChicagoComponent },
  // use a colon and parameter name to include a parameter in the url
//   { path: 'gamma/:id', component: GammaComponent },
  { path: '', pathMatch: 'full', redirectTo: '/sanjose' },
  { path: '**', component: PagenotfoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
