import { Component, OnInit } from '@angular/core';
import { Tache } from "../../models/tache";
import { TacheService } from '../../services/tache/tache.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from "sweetalert2";
import { Etat } from "../../models/etat";
import { EtatService } from '../../services/etat/etat.service';
import { Personne } from '../../models/personne';
import { PersonneService } from '../../services/personne/personne.service';
import { AuthentificationService } from '../../services/authentification/authentification.service';

@Component({
  selector: 'app-add-tache',
  templateUrl: './add-tache.component.html',
  styleUrls: ['./add-tache.component.css']
})

export class AddTacheComponent implements OnInit {

  nouveauTache: Tache = new Tache();
  nouveauEtat: Etat = new Etat();
  nouveauPersonne: Personne = new Personne();
  tacheForm: FormGroup;
  submitted = false;
  listEtats: Etat[] = [];
  listPersonnes: Personne[] = [];
  options = {
    format: "DD/MM/YYYY HH:mm",
  };
  connected: Personne = new Personne();
  dateint : string;
  add : boolean = false;

  constructor(private tacheService: TacheService, private authentificationService: AuthentificationService, private etatService: EtatService, private personneService: PersonneService, private formBuilder: FormBuilder) { }

  get f() { return this.tacheForm.controls };

  ngOnInit() {
    this.tacheForm = this.formBuilder.group({
      libelle: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      etat: ['', Validators.required],
      personne: ['', Validators.required],
    });
    this.onChanges();
    let idConnected: number = parseInt(this.authentificationService.storageGetId());
    this.personneService.getById(idConnected).subscribe(data => {
      this.connected = data;
    })
    this.etatService.getAll().subscribe(data => {
      this.listEtats = data;
    });
    this.personneService.getAll().subscribe(data => {
      this.listPersonnes = data;
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.tacheForm.invalid) {
      return;
    } else {
      this.ajoutTache();
    }
  }

  onReset() { //pour RAZ le formulaire
    this.submitted = false;
    this.tacheForm.reset;
  }

  onChanges() {
    this.tacheForm.get('dateDebut').valueChanges.subscribe(val => {
      this.nouveauTache.dateFin = val;
    })
  }

  ajoutTache() {
    this.nouveauTache.etat = this.nouveauEtat;
    this.nouveauTache.personne = this.nouveauPersonne;
    this.nouveauTache.createur = this.connected;
    if (this.nouveauTache.dateDebut < this.nouveauTache.dateFin) {
      this.tacheService.add(this.nouveauTache).subscribe(res => {
        if (res) {
          this.notif();
        }
      })
    } else {
      this.notifechec();
    }
  }

  redirection() {
    window.location.href = "/admin/listtache";
  }

  notif() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Tâche ajoutée!',
      showConfirmButton: false,
      timer: 1500,
      onClose: this.redirection
    })
  }

  notifechec() {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Veuillez sélectionner une date de fin ultérieure à celle de début',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  addHour(){
    if (!this.add){
      this.dateint = this.nouveauTache.dateFin + (1000*60*60);
      this.add = true;
    } else {
      this.dateint = this.dateint + (1000*60*60);
    }
    this.tacheForm.patchValue({dateFin : new Date(this.dateint)})
  }

  addDay(){
    if (!this.add){
      this.dateint = this.nouveauTache.dateFin + (1000*60*60*24);
      this.add = true;
    } else {
      this.dateint = this.dateint + (1000*60*60*24);
    }
    this.tacheForm.patchValue({dateFin : new Date(this.dateint)})
  }

}
