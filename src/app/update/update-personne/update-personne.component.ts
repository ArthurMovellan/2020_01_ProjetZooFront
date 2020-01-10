import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Personne } from '../../models/personne';
import { PersonneService } from '../../services/personne/personne.service';
import { Role } from '../../models/role';
import { RoleService } from '../../services/role/role.service';
import { Zone } from '../../models/zone';
import { ZoneService } from '../../services/zone/zone.service';

@Component({
  selector: 'app-update-personne',
  templateUrl: './update-personne.component.html',
  styleUrls: ['./update-personne.component.css']
})
export class UpdatePersonneComponent implements OnInit {

  id: number;
  personnecourant: Personne = new Personne();
  rolecourant: Role = new Role();
  zonecourant: Zone = new Zone();
  listRoles: Role[] = [];
  listZones: Zone[] = [];
  personneForm: FormGroup;
  submitted = false;

  constructor(private personneService: PersonneService, private roleService: RoleService, private zoneService : ZoneService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  get f() { return this.personneForm.controls };

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.personneService.getById(this.id).subscribe(data => {
      this.personnecourant = data;
      this.rolecourant = this.personnecourant.role;
      this.zonecourant = this.personnecourant.zone;
    });
    this.personneForm = this.formBuilder.group({
      login: ['', Validators.required],
      mdp: ['', Validators.required],
      nom: ['', Validators.required],
      role: ['', Validators.required],
      zone: ['', Validators.required]
    });
    this.roleService.getAll().subscribe(data => {
      this.listRoles = data;
    });
    this.zoneService.getAll().subscribe(data => {
      this.listZones = data;
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.personneForm.invalid) {
      return;
    } else {
      this.modifierPersonne();
    }
  }

  onReset() {
    this.submitted = false;
    this.personneForm.reset;
  }

  modifierPersonne() {
    this.personnecourant.role = this.rolecourant;
    this.personnecourant.zone = this.zonecourant;
    this.personneService.update(this.id, this.personnecourant).subscribe(res =>{
      if (res){
        this.notif();
      }
    });
  }

  redirection() {
    window.location.href = "/admin/listpersonne";
  }

  notif() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Personne modifiée!',
      showConfirmButton: false,
      timer: 1500,
      onClose: this.redirection
    })
  }

}
