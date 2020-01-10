import { Component, OnInit } from '@angular/core';
import { TacheService } from '../../services/tache/tache.service';
import { Tache } from '../../models/tache'
import { Etat } from '../../models/etat'
import { EtatService } from '../../services/etat/etat.service';
import Swal from 'sweetalert2'
import { PersonneService } from '../../services/personne/personne.service';
import { AuthentificationService } from 'src/app/services/authentification/authentification.service';

@Component({
  selector: 'app-personnel-list-tache',
  templateUrl: './personnel-list-tache.component.html',
  styleUrls: ['./personnel-list-tache.component.css']
})
export class PersonnelListTacheComponent implements OnInit {

  listTaches : Tache[] = [];
  listEtats : Etat[] = [];
  modifok : boolean = false;
  idConnected : number ;

  constructor(private tacheService: TacheService, private authentificationService : AuthentificationService, private personneService : PersonneService, private etatService : EtatService) { }

  ngOnInit() {
    let login : string = this.authentificationService.storageGetUser();
    this.personneService.getByLogin(login).subscribe(data =>{
      this.idConnected = data.id;
      this.tacheService.getAllByIdPersonne(this.idConnected).subscribe(data=>{
        this.listTaches = data;
        this.etatService.getAll().subscribe(data=>{
          this.listEtats = data;
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

  filter (etat : Etat){
    if (etat == null){
      this.tacheService.getAllByIdPersonne(this.idConnected).subscribe(data=>{
        this.listTaches = data;
      })
    } else {
      this.tacheService.getAllByIdPersonneByIdEtat(this.idConnected, etat.id).subscribe(data=>{
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
