import { Component, OnInit } from '@angular/core';
import { ZoneService } from '../../services/zone/zone.service';
import { Zone } from '../../models/zone'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-zone',
  templateUrl: './list-zone.component.html',
  styleUrls: ['./list-zone.component.css']
})
export class ListZoneComponent implements OnInit {

  listZones : Zone[] = [];

  constructor(private zoneService: ZoneService) { }

  ngOnInit() {
    this.zoneService.getAll().subscribe(data => {
      this.listZones = data;
    })
  }

  delZone(id: number, index) {
    this.zoneService.delete(id).subscribe((res: Response) => {
      if (!res) {
        Swal.fire(
                "La zone n'a pas pu être supprimée car au moins une personne ou un enclos en fait partie",
              )
      } else {
        if (res){
          this.listZones.splice(index, 1);
          Swal.fire(
                    'Zone supprimée!',
                  )
        }
      }
    });
    
  }

  askfordel(id: number, index) {
    this.notif(id, index);
  }

  notif(id: number, index) {
    Swal.fire({
      title: 'Etes-vous sûr ?',
      text: "La suppression de cette zone sera définitive",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, je veux la supprimer'
    }).then((result) => {
      if (result.value) {
        this.delZone(id, index)
      }
    })
  }   

}
