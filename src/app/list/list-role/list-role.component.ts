import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role/role.service';
import { Role } from '../../models/role'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {

  listRoles : Role[] = [];

  constructor(private roleService: RoleService) { }

  ngOnInit() {
    this.roleService.getAll().subscribe(data => {
      this.listRoles = data;
    })
  }

  delRole(id: number, index) {
    this.roleService.delete(id).subscribe((res: Response) => {
      if (!res) {
        Swal.fire(
                "Le rôle n'a pas pu être supprimé car il est attrbué à au moins une personne",
              )
      } else {
        if (res){
          this.listRoles.splice(index, 1);
          Swal.fire(
                    'Rôle supprimé!',
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
      text: "La suppression de ce rôle sera définitive",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, je veux le supprimer'
    }).then((result) => {
      if (result.value) {
        this.delRole(id, index)
      }
    })
  }   

}
