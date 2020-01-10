import { Component, OnInit } from '@angular/core';
import { Role } from "../../models/role";
import { RoleService } from '../../services/role/role.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from "sweetalert2";

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})

export class AddRoleComponent implements OnInit {

  nouveauRole: Role = new Role();
  roleForm: FormGroup;
  submitted = false;

  constructor(private roleService: RoleService, private formBuilder: FormBuilder) { }

  get f() {return this.roleForm.controls};

  ngOnInit() {
    this.roleForm = this.formBuilder.group({
      libelle: ['', Validators.required],
    })
  }

  onSubmit(){
    this.submitted=true;
    if (this.roleForm.invalid){
      return;
    } else{
      this.ajoutRole();
    }
  }

  onReset(){ //pour RAZ le formulaire
    this.submitted=false;
    this.roleForm.reset;
  }

  ajoutRole() {
    this.roleService.add(this.nouveauRole).subscribe(res =>{
      if (res){
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
      title: 'Rôle ajouté!',
      showConfirmButton: false,
      timer: 1500,
      onClose: this.redirection
    })
  }

}
