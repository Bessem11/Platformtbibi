import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {FormulairemedecinComponent} from './auth/formulaire/formulairemedecin/formulairemedecin.component';
import {FormulairepatientComponent} from './auth/formulaire/formulairepatient/formulairepatient.component';
import {AccueilpatientComponent} from './accueilpatient/accueilpatient.component';
import {RecherchemedecinComponent} from './accueilpatient/recherchemedecin/recherchemedecin.component';
import {NavbarpatientComponent} from './accueilpatient/navbarpatient/navbarpatient.component';
import {NumberComponent} from './number/number.component';
import {BaspageComponent} from './accueilpatient/baspage/baspage.component';


const routes: Routes = [{path: 'accueil' , component: AccueilComponent },
  {path: 'inscription', component: InscriptionComponent },
  {path: 'formulairepatient', component: FormulairepatientComponent },
  {path: 'formulairemedecin', component: FormulairemedecinComponent },
  {path: 'accueilpatient', component: AccueilpatientComponent },
  {path: '', component:  AccueilComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
