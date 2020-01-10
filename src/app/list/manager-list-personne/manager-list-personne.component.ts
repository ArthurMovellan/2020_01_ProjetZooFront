import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../../services/personne/personne.service';
import { Personne } from '../../models/personne'
import { remove } from 'remove-accents'
import { AuthentificationService } from 'src/app/services/authentification/authentification.service';

@Component({
  selector: 'app-manager-list-personne',
  templateUrl: './manager-list-personne.component.html',
  styleUrls: ['./manager-list-personne.component.css']
})
export class ManagerListPersonneComponent implements OnInit {

  listPersonnes : Personne[] = [];

  constructor(private personneService: PersonneService, private authentificationService : AuthentificationService) { }

  ngOnInit() {
    let zonestr : string = this.authentificationService.storageGetZone();
    zonestr = remove(zonestr);
    this.personneService.getAllByZone(zonestr).subscribe(data => {
      this.listPersonnes = data;
    })
  }

}
