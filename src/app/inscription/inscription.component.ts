import { Component, OnInit } from '@angular/core';

import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor( private authentificationservice: AuthService) { }

  ngOnInit() {
  }

}
