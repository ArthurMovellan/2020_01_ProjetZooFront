import { Component, OnInit } from '@angular/core';
import { Zone } from "../../models/zone";
import { ZoneService } from '../../services/zone/zone.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from "sweetalert2";

@Component({
  selector: 'app-add-zone',
  templateUrl: './add-zone.component.html',
  styleUrls: ['./add-zone.component.css']
})

export class AddZoneComponent implements OnInit {

  nouveauZone: Zone = new Zone();
  zoneForm: FormGroup;
  submitted = false;

  constructor(private zoneService: ZoneService, private formBuilder: FormBuilder) { }

  get f() {return this.zoneForm.controls};

  ngOnInit() {
    this.zoneForm = this.formBuilder.group({
      nom: ['', Validators.required],
    })
  }

  onSubmit(){
    this.submitted=true;
    if (this.zoneForm.invalid){
      return;
    } else{
      this.ajoutZone();
    }
  }

  onReset(){ //pour RAZ le formulaire
    this.submitted=false;
    this.zoneForm.reset;
  }

  ajoutZone() {
    this.zoneService.add(this.nouveauZone).subscribe(res =>{
      if (res){
        this.notif();
      }
    });
  }

  redirection() {
    window.location.href = "/admin/listzone";
  }

  notif() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Zone ajoutée!',
      showConfirmButton: false,
      timer: 1500,
      onClose: this.redirection
    })
  }

}
