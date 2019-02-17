import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {FormulairemedecinComponent} from './auth/formulaire/formulairemedecin/formulairemedecin.component';
import {FormulairepatientComponent} from './auth/formulaire/formulairepatient/formulairepatient.component';


const routes: Routes = [{path: 'accueil' , component: AccueilComponent },{path: 'inscription', component: InscriptionComponent },
  {path: 'formulairepatient', component: FormulairepatientComponent },{path: 'formulairemedecin', component: FormulairemedecinComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
