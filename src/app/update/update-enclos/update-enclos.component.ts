import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Enclos } from '../../models/enclos';
import { EnclosService } from '../../services/enclos/enclos.service';
import { Zone } from '../../models/zone';
import { ZoneService } from '../../services/zone/zone.service';

@Component({
  selector: 'app-update-enclos',
  templateUrl: './update-enclos.component.html',
  styleUrls: ['./update-enclos.component.css']
})
export class UpdateEnclosComponent implements OnInit {

  id: number;
  encloscourant: Enclos = new Enclos();
  zonecourant: Zone = new Zone();
  listZones: Zone[] = [];
  enclosForm: FormGroup;
  submitted = false;

  constructor(private enclosService: EnclosService, private zoneService: ZoneService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  get f() { return this.enclosForm.controls };

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.enclosService.getById(this.id).subscribe(data => {
      this.encloscourant = data;
      this.zonecourant = this.encloscourant.zone;
    });
    this.enclosForm = this.formBuilder.group({
      nom : ['', Validators.required],
      capacite: ['', Validators.required],
      zone: ['', Validators.required]
    });
    this.zoneService.getAll().subscribe(data => {
      this.listZones = data;
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
    this.encloscourant.zone = this.zonecourant;
    this.enclosService.update(this.id, this.encloscourant).subscribe(res =>{
      if (res){
        this.notif();
      }
    });
  }

  redirection() {
    window.location.href = "/admin/listenclos";
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
