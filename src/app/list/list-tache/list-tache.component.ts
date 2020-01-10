import { Component, OnInit } from '@angular/core';
import { TacheService } from '../../services/tache/tache.service';
import { EtatService } from '../../services/etat/etat.service';
import { PersonneService } from '../../services/personne/personne.service';
import { Etat } from '../../models/etat'
import { Tache } from '../../models/tache'
import { Personne } from '../../models/personne'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-tache',
  templateUrl: './list-tache.component.html',
  styleUrls: ['./list-tache.component.css']
})
export class ListTacheComponent implements OnInit {

  listTaches: Tache[] = [];
  listEtats: Etat[] = [];
  listPersonnes: Personne[] = [];
  etatSearch : Etat = null;
  personneSearch : Personne = null;

  constructor(private tacheService: TacheService, private etatService: EtatService, private personneService: PersonneService) { }

  ngOnInit() {
    this.tacheService.getAll().subscribe(data => {
      this.listTaches = data;
      this.etatService.getAll().subscribe(data => {
        this.listEtats = data;
        this.personneService.getAll().subscribe(data => {
          this.listPersonnes = data;
        })
      })
    })
  }

  delTache(id: number, index) {
    this.tacheService.delete(id).subscribe((res: Response) => {
      if (!res) {
        Swal.fire(
          "La tâche n'a pas pu être supprimée",
        )
      } else {
        if (res) {
          this.listTaches.splice(index, 1);
          Swal.fire(
            'Tâche supprimée!',
          )
        }
      }
    });
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

  askfordel(id: number, index) {
    this.notif(id, index);
  }

  notif(id: number, index) {
    Swal.fire({
      title: 'Etes-vous sûr ?',
      text: "La suppression de cette tâche sera définitive",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, je veux la supprimer'
    }).then((result) => {
      if (result.value) {
        this.delTache(id, index)
      }
    })
  }

  getBackgroundColor(tache: Tache) {
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
