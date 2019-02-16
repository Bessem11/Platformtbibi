import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import {AuthService} from './services/auth.service';


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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
