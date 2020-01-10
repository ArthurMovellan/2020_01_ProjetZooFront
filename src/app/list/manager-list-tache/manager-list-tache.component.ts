import { Component, OnInit } from '@angular/core';
import { TacheService } from '../../services/tache/tache.service';
import { Tache } from '../../models/tache'
import { EtatService } from '../../services/etat/etat.service';
import { PersonneService } from '../../services/personne/personne.service';
import { Etat } from '../../models/etat'
import { Personne } from '../../models/personne'
import Swal from 'sweetalert2'
import { remove } from 'remove-accents'
import { AuthentificationService } from 'src/app/services/authentification/authentification.service';

@Component({
  selector: 'app-manager-list-tache',
  templateUrl: './manager-list-tache.component.html',
  styleUrls: ['./manager-list-tache.component.css']
})
export class ManagerListTacheComponent implements OnInit {

  listTaches : Tache[] = [];
  listEtats: Etat[] = [];
  listPersonnes: Personne[] = [];
  etatSearch : Etat = null;
  personneSearch : Personne = null;

  constructor(private tacheService: TacheService, private authentificationService : AuthentificationService, private etatService: EtatService, private personneService: PersonneService) { }

  ngOnInit() {
    let zonestr : string = this.authentificationService.storageGetZone();
    zonestr = remove(zonestr);
    this.tacheService.getAllByZone(zonestr).subscribe(data => {
      this.listTaches = data;
      this.etatService.getAll().subscribe(data => {
        this.listEtats = data;
        this.personneService.getAllByZone(zonestr).subscribe(data => {
          this.listPersonnes = data;
        })
      })
    })
  }

  cancelTache(id: number) {
    this.tacheService.affecterEtat(id, 3).subscribe((res: Response) =>{
      if (!res){
        Swal.fire(
          "La tâche n'a pas pu être annulée",
        )
      } else {
        Swal.fire(
          "Tâche annulée!",
        )
        window.location.reload();
      }
    });
  }

  getBackgroundColor(tache : Tache){
    if (tache.etat.id == 3) {
      return 'grey';
    } else if (tache.etat.id == 2) {
      return 'green';
    } else {
      if (new Date(tache.dateDebut) > new Date()) {
        return 'green';
      } else {
        if (new Date(tache.dateFin) > new Date()) {
          return 'orange';
        } else {
          return 'red';
        }
      }
    }
  }

  filter (etat : Etat, pers : Personne){
    if (etat == null && pers == null){
      this.personneSearch = null;
      this.etatSearch = null;
      this.tacheService.getAll().subscribe(data=>{
        this.listTaches = data;
      })
    } else if (etat == null){
      this.etatSearch = null;
      this.personneSearch = pers;
      this.tacheService.getAllByIdPersonne(pers.id).subscribe(data => {
        this.listTaches = data;
      })
    } else if (pers == null){
      this.etatSearch = etat;
      this.personneSearch = null;
      this.tacheService.getAllByIdEtat(etat.id).subscribe(data=>{
        this.listTaches = data;
      })
    } else {
      this.etatSearch = etat;
      this.personneSearch = pers;
      this.tacheService.getAllByIdPersonneByIdEtat(pers.id, etat.id).subscribe(data=>{
        this.listTaches = data;
      })
    }
  }

  OKTache(id : number){
    this.tacheService.affecterEtat(id, 2).subscribe((res: Response) =>{
      if (!res){
        Swal.fire("La tâche n'a pas pu être marquée comme faite")
      } else {
        Swal.fire("Tâche marquée comme faite!")
        window.location.reload();
      }
    })
  }

}
