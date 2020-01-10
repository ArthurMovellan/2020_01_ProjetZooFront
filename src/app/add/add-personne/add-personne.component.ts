import { Component, OnInit } from '@angular/core';
import { Personne } from "../../models/personne";
import { PersonneService } from '../../services/personne/personne.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from "sweetalert2";
import { Role } from "../../models/role";
import { RoleService } from '../../services/role/role.service';
import { Zone } from '../../models/zone';
import { ZoneService } from '../../services/zone/zone.service';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css']
})

export class AddPersonneComponent implements OnInit {

  nouveauPersonne: Personne = new Personne();
  nouveauRole: Role = new Role();
  nouveauZone : Zone = new Zone();
  personneForm: FormGroup;
  submitted = false;
  listRoles: Role[] = [];
  listZones : Zone[] = [];

  constructor(private personneService: PersonneService, private roleService: RoleService, private zoneService : ZoneService, private formBuilder: FormBuilder) { }

  get f() {return this.personneForm.controls};

  ngOnInit() {
    this.personneForm = this.formBuilder.group({
      login: ['', Validators.required],
      mdp: ['', Validators.required],
      nom: ['', Validators.required],
      role: ['', Validators.required],
      zone: ['', Validators.required],
    });
    this.roleService.getAll().subscribe(data => {
      this.listRoles = data;
    });
    this.zoneService.getAll().subscribe(data => {
      this.listZones = data;
    });
  }

  onSubmit(){
    this.submitted=true;
    if (this.personneForm.invalid){
      return;
    } else{
      this.ajoutPersonne();
    }
  }

  onReset(){ //pour RAZ le formulaire
    this.submitted=false;
    this.personneForm.reset;
  }

  ajoutPersonne() {
    this.nouveauPersonne.role = this.nouveauRole;
    this.nouveauPersonne.zone = this.nouveauZone;
    this.personneService.add(this.nouveauPersonne).subscribe(res  => {
      if (res) {
        this.notif();
      }
    })
  }

  redirection() {
    window.location.href = "/admin/listpersonne";
  }

  notif() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Personne ajoutée!',
      showConfirmButton: false,
      timer: 1500,
      onClose: this.redirection
    })
  }

}
