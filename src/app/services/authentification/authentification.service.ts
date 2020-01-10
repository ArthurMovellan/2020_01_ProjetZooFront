import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personne } from '../../models/personne';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Role } from 'src/app/models/role';
import { Zone } from 'src/app/models/zone';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  logi: string;
  role: string;
  zone: string;
  nom: string;
  helper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) { }

  loginWebService(login, password) {
    let pers: Personne = new Personne();
    pers.login = login;
    pers.mdp = password;
    return this.http.post("http://localhost:8080/personne/login", pers).pipe();
  }

  login(login, password) {
    this.loginWebService(login, password).subscribe(res => {
      if (res != null) {
        localStorage.setItem('currentUser', res['token']);
        this.logi = this.helper.decodeToken(localStorage.getItem('currentUser'))['sub'];
        this.enregistrement();
      } else {
        this.notifechec();
      }
    });
  }

  decode() {
    return this.helper.decodeToken(localStorage.getItem('currentUser'))['sub'];
  }

  getPers() {
    return this.http.get<Personne>("http://localhost:8080/personne/login/" + this.logi).pipe();
  }

  enregistrement() {
    this.role = this.storageGetRole();
    this.zone = this.storageGetZone();
    this.nom = this.storageGetNom();
    this.notifsucces();
    this.redirection();
  }

  redirection() {
    if (this.role == "Administrateur") {
      window.location.href = "http://localhost:4200/admin";
    } else if (this.role == "Manager") {
      window.location.href = "http://localhost:4200/manager";
    } else if (this.role == "Personnel") {
      window.location.href = "http://localhost:4200/personnel";
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  notifsucces() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Vous êtes connecté en tant que ' + this.nom + ', ' + this.role + ' de la zone : ' + this.zone,
      showConfirmButton: false,
      timer: 1500,
    })
  }

  notifechec() {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Mauvaise combinaison login + mdp',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  storageGetId() {
    let tok: string = this.decode();
    let poslogin: number = tok.search("login");
    return tok.substr(5, poslogin - 7);
  }

  storageGetUser() {
    let tok: string = this.decode();
    let poslogin: number = tok.search("login");
    let posnom: number = tok.search("nom");
    return tok.substr(poslogin + 8, posnom - poslogin - 10);
  }

  storageGetNom() {
    let tok: string = this.decode();
    let posnom: number = tok.search("nom");
    let posrole: number = tok.search("role");
    return tok.substr(posnom + 6, posrole - posnom - 8);
  }

  storageGetRole() {
    let tok: string = this.decode();
    let posrole: number = tok.search("role");
    let poszone: number = tok.search("zone");
    return tok.substr(posrole + 7, poszone - posrole - 9);
  }

  storageGetZone() {
    let tok: string = this.decode();
    let poszone: number = tok.search("zone");
    return tok.substr(poszone + 7);
  }


}
