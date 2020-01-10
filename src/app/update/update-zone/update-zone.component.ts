import { Component, OnInit } from '@angular/core';
import { Zone } from '../../models/zone';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ZoneService } from '../../services/zone/zone.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-zone',
  templateUrl: './update-zone.component.html',
  styleUrls: ['./update-zone.component.css']
})
export class UpdateZoneComponent implements OnInit {

  id: number;
  zonecourant: Zone = new Zone();
  zoneForm: FormGroup;
  submitted = false;

  constructor(private zoneService: ZoneService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  get f() { return this.zoneForm.controls };

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.zoneService.getById(this.id).subscribe(data => {
      this.zonecourant = data;
    });
    this.zoneForm = this.formBuilder.group({
      nom: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.zoneForm.invalid) {
      return;
    } else {
      this.modifierZone();
    }
  }

  onReset() {
    this.submitted = false;
    this.zoneForm.reset;
  }

  modifierZone() {
    this.zoneService.update(this.id, this.zonecourant).subscribe(res => {
      if (res) {
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
      title: 'Zone modifiée!',
      showConfirmButton: false,
      timer: 1500,
      onClose: this.redirection
    })
  }

}
