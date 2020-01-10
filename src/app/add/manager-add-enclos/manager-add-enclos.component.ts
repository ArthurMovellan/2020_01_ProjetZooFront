import { Component, OnInit } from '@angular/core';
import { Enclos } from "../../models/enclos";
import { EnclosService } from '../../services/enclos/enclos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from "sweetalert2";
import { Zone } from '../../models/zone';
import { ZoneService } from '../../services/zone/zone.service';
import { remove } from 'remove-accents'

@Component({
  selector: 'app-manager-add-enclos',
  templateUrl: './manager-add-enclos.component.html',
  styleUrls: ['./manager-add-enclos.component.css']
})

export class ManagerAddEnclosComponent implements OnInit {

  nouveauEnclos: Enclos = new Enclos();
  zoneManager: Zone = new Zone();
  enclosForm: FormGroup;
  submitted = false;
  listZones: Zone[] = [];

  constructor(private enclosService: EnclosService, private zoneService: ZoneService, private formBuilder: FormBuilder) { }

  get f() {return this.enclosForm.controls};

  ngOnInit() {
    let zonestr : string = localStorage.getItem("currentZone");
    zonestr = remove(zonestr);
    this.enclosForm = this.formBuilder.group({
      nom: ['', Validators.required],
      capacite: ['', Validators.required],
    });
    this.zoneService.getByNom(zonestr).subscribe(res =>{
      this.zoneManager = res;
    })
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
    this.nouveauEnclos.zone = this.zoneManager;
    this.enclosService.add(this.nouveauEnclos).subscribe(res  => {
      if (res) {
        this.notif();
      }
    })
  }

  redirection() {
    window.location.href = "/manager/listenclos";
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
