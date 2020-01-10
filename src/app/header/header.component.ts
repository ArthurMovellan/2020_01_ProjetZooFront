import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../services/personne/personne.service';
import { AuthentificationService } from '../services/authentification/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  role: string;
  login: string;
  nomUser:string;
  idPers:number;
  admin: boolean = false;
  manag: boolean = false;
  perso: boolean = false;

  constructor(private personneServ : PersonneService, private authentificationService : AuthentificationService) { }

  ngOnInit() {
    try {
      this.role = this.authentificationService.storageGetRole();
      this.login = this.authentificationService.storageGetUser();
      this.nomUser = this.authentificationService.storageGetNom();
      this.idPers = parseInt(this.authentificationService.storageGetId());
    }
    finally {
      if (this.role == "Administrateur") {
        this.admin = true;
      } else if (this.role == "Manager") {
        this.manag = true;
      } else if (this.role == "Personnel") {
        this.perso = true;
      }
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    window.location.href = "http://localhost:4200/";
  }

}
