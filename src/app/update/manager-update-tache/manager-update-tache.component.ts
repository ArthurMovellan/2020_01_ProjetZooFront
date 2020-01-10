import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Tache } from '../../models/tache';
import { TacheService } from '../../services/tache/tache.service';
import { Etat } from '../../models/etat';
import { EtatService } from '../../services/etat/etat.service';
import { Personne } from '../../models/personne';
import { PersonneService } from '../../services/personne/personne.service';
import { remove } from 'remove-accents'
import { AuthentificationService } from '../../services/authentification/authentification.service';

@Component({
  selector: 'app-manager-update-tache',
  templateUrl: './manager-update-tache.component.html',
  styleUrls: ['./manager-update-tache.component.css']
})
export class ManagerUpdateTacheComponent implements OnInit {

  id: number;
  tachecourant: Tache = new Tache();
  etatcourant: Etat = new Etat();
  personnecourant: Personne = new Personne();
  listEtats: Etat[] = [];
  listPersonnes: Personne[] = [];
  tacheForm: FormGroup;
  submitted = false;
  options = {
    format: "DD/MM/YYYY HH:mm",
    useCurrent: false,
  };
  connected: Personne = new Personne();

  constructor(private tacheService: TacheService, private authentificationService: AuthentificationService, private etatService: EtatService, private personneService: PersonneService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  get f() { return this.tacheForm.controls };

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.tacheService.getById(this.id).subscribe(data => {
      this.tachecourant = data;
      this.etatcourant = this.tachecourant.etat;
      this.personnecourant = this.tachecourant.personne;
      this.loadDates();
    });
    this.tacheForm = this.formBuilder.group({
      libelle: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      etat: ['', Validators.required],
      personne: ['', Validators.required],
    });
    let idConnected: number = parseInt(this.authentificationService.storageGetId());
    this.personneService.getById(idConnected).subscribe(data => {
      this.connected = data;
    })
    this.etatService.getAll().subscribe(data => {
      this.listEtats = data;
    });
    let zonestr: string = this.authentificationService.storageGetZone();
    zonestr = remove(zonestr);
    this.personneService.getAllByZone(zonestr).subscribe(data => {
      this.listPersonnes = data;
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.tacheForm.invalid) {
      return;
    } else {
      this.modifierTache();
    }
  }

  onReset() {
    this.submitted = false;
    this.tacheForm.reset;
  }

  loadDates() {
    this.tacheForm.patchValue({
      dateDebut: new Date(this.tachecourant.dateDebut),
      dateFin: new Date(this.tachecourant.dateFin)
    });
  }

  modifierTache() {
    this.tachecourant.etat = this.etatcourant;
    this.tachecourant.personne = this.personnecourant;
    this.tachecourant.createur = this.connected;
    if (this.tachecourant.dateDebut < this.tachecourant.dateFin) {
      this.tacheService.update(this.id, this.tachecourant).subscribe(res => {
        if (res) {
          this.notif();
        }
      })
    } else {
      this.notifechec();
    }
  }

  redirection() {
    window.location.href = "/manager/listtache";
  }

  notif() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Tâche modifiée!',
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

  addHour() {
    let day: Date = new Date(this.tachecourant.dateFin);
    day.setHours(day.getHours() + 1);
    this.tacheForm.patchValue({ dateFin: new Date(day) })
  }

  addDay() {
    let day: Date = new Date(this.tachecourant.dateFin);
    day.setHours(day.getHours() + 24);
    this.tacheForm.patchValue({ dateFin: new Date(day) })
  }
}
