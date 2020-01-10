import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Personne } from '../models/personne'
import { PersonneService } from '../services/personne/personne.service'
import { AuthentificationService } from '../services/authentification/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  nouveauPersonne: Personne = new Personne();
  personneForm: FormGroup;
  submitted = false;

  constructor(private personneService : PersonneService, private authentificationService : AuthentificationService, private formBuilder: FormBuilder, private router : Router) { }

  get f() {return this.personneForm.controls};

  ngOnInit( ) {
    this.authentificationService.logout();
    this.personneForm = this.formBuilder.group({
      login: ['', Validators.required],
      mdp: ['', Validators.required],
    })
  }

  onSubmit(){
    this.submitted=true;
    if (this.personneForm.invalid){
      return;
    } else{
      this.verifPersonne();
    }
  }

  onReset(){ //pour RAZ le formulaire
    this.submitted=false;
    this.personneForm.reset;
  }

  verifPersonne() {
    this.authentificationService.login(this.nouveauPersonne.login, this.nouveauPersonne.mdp);
  }
}
