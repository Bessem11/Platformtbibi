import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormulaireComponent } from './auth/formulaire/formulaire.component';
import { ConnexionComponent } from './auth/connexion/connexion.component';
import { VideoComponent } from './accueil/video/video.component';
import { AproposComponent } from './accueil/apropos/apropos.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormulaireComponent,
    ConnexionComponent,
    VideoComponent,
    AproposComponent,
    InscriptionComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
