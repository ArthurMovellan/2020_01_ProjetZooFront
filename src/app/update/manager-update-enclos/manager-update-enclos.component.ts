import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Enclos } from '../../models/enclos';
import { EnclosService } from '../../services/enclos/enclos.service';
import { Zone } from '../../models/zone';
import { ZoneService } from '../../services/zone/zone.service';

@Component({
  selector: 'app-manager-update-enclos',
  templateUrl: './manager-update-enclos.component.html',
  styleUrls: ['./manager-update-enclos.component.css']
})
export class ManagerUpdateEnclosComponent implements OnInit {

  id: number;
  encloscourant: Enclos = new Enclos();
  listZones: Zone[] = [];
  enclosForm: FormGroup;
  submitted = false;

  constructor(private enclosService: EnclosService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  get f() { return this.enclosForm.controls };

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.enclosService.getById(this.id).subscribe(data => {
      this.encloscourant = data;
    });
    this.enclosForm = this.formBuilder.group({
      nom : ['', Validators.required],
      capacite: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.enclosForm.invalid) {
      return;
    } else {
      this.modifierEnclos();
    }
  }

  onReset() {
    this.submitted = false;
    this.enclosForm.reset;
  }

  modifierEnclos() {
    this.enclosService.update(this.id, this.encloscourant).subscribe(res =>{
      if (res){
        this.notif();
      }
    });
  }

  redirection() {
    window.location.href = "/manager/listenclos";
  }

  notif() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Enclos modifié!',
      showConfirmButton: false,
      timer: 1500,
      onClose: this.redirection
    })
  }

}
