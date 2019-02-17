import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-formulairemedecin',
  templateUrl: './formulairemedecin.component.html',
  styleUrls: ['./formulairemedecin.component.css']
})
export class FormulairemedecinComponent implements OnInit {

  motdepasse = '';
  confirmemotdepasse = '';
  nom = '';
  prenom = '';
  cin = '' ;
  email = '';
  telephone = '' ;
  specialite = '';
  prix = '' ;

  error = '' ;
  error1 = '' ;
  isauth = 'false' ;
  isauth1 = 'false' ;
  constructor() { }
  ngOnInit() {
  }
  Onverif() {
    if (this.motdepasse !== this.confirmemotdepasse) {
      this.error = 'Les deux mot de passe ne sont pas identique';
      this.isauth = 'true' ;
    } else {
      this.error = '' ;
      this.isauth = 'false';
    }
  }
  Onsubmit() {
    if (this.nom === '' || this.prenom === '' || this.cin === '' ||
      this.email === '' || this.telephone === '' || this.specialite === '' || this.prix === '' ) {
      this.error1 = 'Veuillez reinseignez toutes les champs';
    } else if (this.telephone.length !== 8 || isNaN(Number(this.telephone))) {
        this.error1 = 'Champs Telephone invalide' ;
    } else if (this.cin.length !== 8 || isNaN(Number(this.cin)) ) {
      this.error1 = 'Champs Cin invalide' ;
    } else if (isNaN(Number(this.prix)) ) {
      this.error1 = 'Champs Prix invalide' ;
    } else {
      this.error1 = '';
    }
  }
}
