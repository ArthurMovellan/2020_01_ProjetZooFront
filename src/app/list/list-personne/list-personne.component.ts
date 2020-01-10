import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../../services/personne/personne.service';
import { Personne } from '../../models/personne'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-personne',
  templateUrl: './list-personne.component.html',
  styleUrls: ['./list-personne.component.css']
})
export class ListPersonneComponent implements OnInit {

  listPersonnes : Personne[] = [];

  constructor(private personneService: PersonneService) { }

  ngOnInit() {
    this.personneService.getAll().subscribe(data => {
      this.listPersonnes = data;
    })
  }

  delPersonne(id: number, index) {
    this.personneService.delete(id).subscribe((res: Response) => {
      if (!res) {
        Swal.fire(
                "La personne n'a pas pu être supprimée car une tâche lui est affiliée",
              )
      } else {
        if (res){
          this.listPersonnes.splice(index, 1);
          Swal.fire(
                    'Personne supprimée!',
                  )
        }
      }
    });
    
  }

  askfordel(id: number, index) {
    this.notif(id, index);
  }

  notif(id: number, index) {
    Swal.fire({
      title: 'Etes-vous sûr ?',
      text: "La suppression de cette personne sera définitive",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, je veux la supprimer'
    }).then((result) => {
      if (result.value) {
        this.delPersonne(id, index)
      }
    })
  }   

}
