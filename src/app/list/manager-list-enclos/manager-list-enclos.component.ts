import { Component, OnInit } from '@angular/core';
import { EnclosService } from '../../services/enclos/enclos.service';
import { Enclos } from '../../models/enclos'
import Swal from 'sweetalert2'
import { remove } from 'remove-accents'
import { AuthentificationService } from 'src/app/services/authentification/authentification.service';

@Component({
  selector: 'app-manager-list-enclos',
  templateUrl: './manager-list-enclos.component.html',
  styleUrls: ['./manager-list-enclos.component.css']
})
export class ManagerListEnclosComponent implements OnInit {

  listEnclos : Enclos[] = [];

  constructor(private enclosService: EnclosService, private authentificationService : AuthentificationService) { }

  ngOnInit() {
    let zonestr : string = this.authentificationService.storageGetZone();
    zonestr = remove(zonestr);
    this.enclosService.getAllByZone(zonestr).subscribe(data => {
      this.listEnclos = data;
    });
  }

  delEnclos(id: number, index) {
    this.enclosService.delete(id).subscribe((res: Response) => {
      if (!res) {
        Swal.fire(
                "L'enclos n'a pas pu être supprimé car au moins un animal ou une personne en fait partie",
              )
      } else {
        if (res){
          this.listEnclos.splice(index, 1);
          Swal.fire(
                    'Enclos supprimé!',
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
      text: "La suppression de cet enclos sera définitive",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, je veux le supprimer'
    }).then((result) => {
      if (result.value) {
        this.delEnclos(id, index)
      }
    })
  }   

}
