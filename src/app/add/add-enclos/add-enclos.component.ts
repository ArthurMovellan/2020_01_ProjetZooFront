import { Component, OnInit } from '@angular/core';
import { Enclos } from "../../models/enclos";
import { EnclosService } from '../../services/enclos/enclos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from "sweetalert2";
import { Zone } from '../../models/zone';
import { ZoneService } from '../../services/zone/zone.service';

@Component({
  selector: 'app-add-enclos',
  templateUrl: './add-enclos.component.html',
  styleUrls: ['./add-enclos.component.css']
})

export class AddEnclosComponent implements OnInit {

  nouveauEnclos: Enclos = new Enclos();
  nouveauZone: Zone = new Zone();
  enclosForm: FormGroup;
  submitted = false;
  listZones: Zone[] = [];

  constructor(private enclosService: EnclosService, private zoneService: ZoneService, private formBuilder: FormBuilder) { }

  get f() {return this.enclosForm.controls};

  ngOnInit() {
    this.enclosForm = this.formBuilder.group({
      nom: ['', Validators.required],
      capacite: ['', Validators.required],
      zone: ['', Validators.required]
    });
    this.zoneService.getAll().subscribe(data => {
      this.listZones = data;
    });
  }

  onSubmit(){
    this.submitted=true;
    if (this.enclosForm.invalid){
      return;
    } else{
      this.ajoutEnclos();
    }
  }

  onReset(){ //pour RAZ le formulaire
    this.submitted=false;
    this.enclosForm.reset;
  }

  ajoutEnclos() {
    this.nouveauEnclos.zone = this.nouveauZone;
    this.enclosService.add(this.nouveauEnclos).subscribe(res  => {
      if (res) {
        this.notif();
      }
    })
  }

  redirection() {
    window.location.href = "/admin/listenclos";
  }

  notif() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Enclos ajouté!',
      showConfirmButton: false,
      timer: 1500,
      onClose: this.redirection
    })
  }

}
