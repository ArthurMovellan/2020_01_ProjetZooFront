import { Component, OnInit } from '@angular/core';
import { Nourriture } from "../../models/nourriture";
import { NourritureService } from '../../services/nourriture/nourriture.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from "sweetalert2";

@Component({
  selector: 'app-manager-add-nourriture',
  templateUrl: './manager-add-nourriture.component.html',
  styleUrls: ['./manager-add-nourriture.component.css']
})

export class ManagerAddNourritureComponent implements OnInit {

  nouveauNourriture: Nourriture = new Nourriture();
  nourritureForm: FormGroup;
  submitted = false;

  constructor(private nourritureService: NourritureService, private formBuilder: FormBuilder) { }

  get f() {return this.nourritureForm.controls};

  ngOnInit() {
    this.nourritureForm = this.formBuilder.group({
      nom: ['', Validators.required],
      stock: ['', Validators.required],
    })
  }

  onSubmit(){
    this.submitted=true;
    if (this.nourritureForm.invalid){
      return;
    } else{
      this.ajoutNourriture();
    }
  }

  onReset(){ //pour RAZ le formulaire
    this.submitted=false;
    this.nourritureForm.reset;
  }

  ajoutNourriture() {
    this.nourritureService.add(this.nouveauNourriture).subscribe(res =>{
      if (res){
        this.notif();
      }
    });
  }

  redirection() {
    window.location.href = "/manager/listnourriture";
  }

  notif() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Nourriture ajoutée!',
      showConfirmButton: false,
      timer: 1500,
      onClose: this.redirection
    })
  }

}
