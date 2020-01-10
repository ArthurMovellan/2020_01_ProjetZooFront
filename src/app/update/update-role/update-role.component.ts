import { Component, OnInit } from '@angular/core';
import { Role } from '../../models/role';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoleService } from '../../services/role/role.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {

  id: number;
  rolecourant: Role = new Role();
  roleForm: FormGroup;
  submitted = false;

  constructor(private roleService: RoleService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  get f() { return this.roleForm.controls };

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.roleService.getById(this.id).subscribe(data => {
      this.rolecourant = data;
    });
    this.roleForm = this.formBuilder.group({
      libelle: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.roleForm.invalid) {
      return;
    } else {
      this.modifierRole();
    }
  }

  onReset() {
    this.submitted = false;
    this.roleForm.reset;
  }

  modifierRole() {
    this.roleService.update(this.id, this.rolecourant).subscribe(res => {
      if (res) {
        this.notif();
      }
    });
  }

  redirection() {
    window.location.href = "/admin/listrole";
  }

  notif() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Rôle modifié!',
      showConfirmButton: false,
      timer: 1500,
      onClose: this.redirection
    })
  }

}
