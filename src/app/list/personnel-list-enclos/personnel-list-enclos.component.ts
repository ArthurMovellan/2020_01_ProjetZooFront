import { Component, OnInit } from '@angular/core';
import { EnclosService } from '../../services/enclos/enclos.service';
import { Enclos } from '../../models/enclos'
import { remove } from 'remove-accents'
import { AuthentificationService } from 'src/app/services/authentification/authentification.service';

@Component({
  selector: 'app-personnel-list-enclos',
  templateUrl: './personnel-list-enclos.component.html',
  styleUrls: ['./personnel-list-enclos.component.css']
})
export class PersonnelListEnclosComponent implements OnInit {

  listEnclos : Enclos[] = [];

  constructor(private enclosService: EnclosService, private authentificationService : AuthentificationService) { }

  ngOnInit() {
    let zonestr : string = this.authentificationService.storageGetZone();
    zonestr = remove(zonestr);
    this.enclosService.getAllByZone(zonestr).subscribe(data => {
      this.listEnclos = data;
    });
  }

}
