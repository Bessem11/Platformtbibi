import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './accueil/apropos/apropos.component';
import { VideoComponent } from './accueil/video/video.component';
import { FormulaireComponent } from './auth/formulaire/formulaire.component';
import { ConnexionComponent } from './auth/connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormulairepatientComponent } from './auth/formulaire/formulairepatient/formulairepatient.component';
import { FormulairemedecinComponent } from './auth/formulaire/formulairemedecin/formulairemedecin.component';
import {AccueilpatientComponent} from './accueilpatient/accueilpatient.component';
import {NavbarpatientComponent} from './accueilpatient/navbarpatient/navbarpatient.component';
import {BaspageComponent} from './accueilpatient/baspage/baspage.component';
import {NumberComponent} from './number/number.component';
import {RecherchemedecinComponent} from './accueilpatient/recherchemedecin/recherchemedecin.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilComponent,
    AproposComponent,
    VideoComponent,
    FormulaireComponent,
    ConnexionComponent,
    InscriptionComponent,
    FormulairepatientComponent,
    FormulairemedecinComponent,
    AccueilpatientComponent,
    NavbarpatientComponent,
    BaspageComponent,
    NumberComponent,
    RecherchemedecinComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
