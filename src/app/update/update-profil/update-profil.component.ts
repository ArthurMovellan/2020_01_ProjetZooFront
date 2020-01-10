import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Personne } from '../../models/personne';
import { PersonneService } from '../../services/personne/personne.service';
import { RoleService } from '../../services/role/role.service';
import { ZoneService } from '../../services/zone/zone.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthentificationService } from 'src/app/services/authentification/authentification.service';

@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.component.html',
  styleUrls: ['./update-profil.component.css']
})
export class UpdateProfilComponent implements OnInit {

  id: number;
  login: string;
  personnecourant: Personne = new Personne();
  personneForm: FormGroup;
  submitted = false;
  helper = new JwtHelperService();
  admin:boolean = false;
  manager:boolean=false;
  personnel:boolean=false;
  oldmdp:string;
  newmdp1:string = "";
  newmdp2:string = "";

  constructor(private personneService: PersonneService, private authentificationService : AuthentificationService, private roleService: RoleService, private zoneService: ZoneService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  get f() { return this.personneForm.controls };

  ngOnInit() {
    if (!localStorage.getItem('currentUser')){
      window.location.href = "";
    }
    let id = parseInt(this.authentificationService.storageGetId());
    let role = this.authentificationService.storageGetRole();
    this.personneService.getById(id).subscribe(data => {
      this.personnecourant = data;
      this.personneForm = this.formBuilder.group({
        login: ['', Validators.required],
        nom: ['', Validators.required],
        oldmdp: ['', Validators.required], 
      });
    })
    if (role == "Administrateur"){
      this.admin = true;
    }else if (role == "Manager"){
      this.manager = true;
    }else if (role == "Personnel"){
      this.personnel = true;
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.personneForm.invalid) {
      return;
    } else {
      if (this.oldmdp != this.personnecourant.mdp){
        this.notifechec1();
      }else if(this.newmdp1 != "" && this.newmdp1 != this.newmdp2){
        this.notifechec2();
      }else{
        if(this.newmdp1 != ""){
        this.personnecourant.mdp = this.newmdp1;
      }else{
        this.personnecourant.mdp = this.oldmdp;
      }
        this.modifierPersonne();
      }
      
    }
  }

  onReset() {
    this.submitted = false;
    this.personneForm.reset;
  }

  modifierPersonne() {
    this.personneService.update(this.personnecourant.id, this.personnecourant).subscribe(res => {
      if (res) {
        this.notif();
        this.redirection();
      }
    });
  }

  redirection() {
    console.log("aa");
    if(this.admin){
      window.location.href = "/admin";
    }else if(this.manager){
      window.location.href = "/manager";
    }else if(this.personnel){
      window.location.href = "/personnel";
    }
  }

  notif() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Vous avez bien modifié votre profil',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  notifechec1() {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Veuillez entrer votre ancien mot de passe',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  notifechec2() {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Les deux nouveaux mots de passe ne sont pas identiques',
      showConfirmButton: false,
      timer: 1500,
    })
  }

}

