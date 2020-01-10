import { Component, OnInit } from '@angular/core';
import { Nourriture } from '../../models/nourriture';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NourritureService } from '../../services/nourriture/nourriture.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manager-update-nourriture',
  templateUrl: './manager-update-nourriture.component.html',
  styleUrls: ['./manager-update-nourriture.component.css']
})
export class ManagerUpdateNourritureComponent implements OnInit {

  id: number;
  nourriturecourant: Nourriture = new Nourriture();
  nourritureForm: FormGroup;
  submitted = false;

  constructor(private nourritureService: NourritureService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  get f() { return this.nourritureForm.controls };

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.nourritureService.getById(this.id).subscribe(data => {
      this.nourriturecourant = data;
    });
    this.nourritureForm = this.formBuilder.group({
      nom: ['', Validators.required],
      stock: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.nourritureForm.invalid) {
      return;
    } else {
      this.modifierNourriture();
    }
  }

  onReset() {
    this.submitted = false;
    this.nourritureForm.reset;
  }

  modifierNourriture() {
    this.nourritureService.update(this.id, this.nourriturecourant).subscribe(res => {
      if (res) {
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
      title: 'Nourriture modifiée!',
      showConfirmButton: false,
      timer: 1500,
      onClose: this.redirection
    })
  }

}
