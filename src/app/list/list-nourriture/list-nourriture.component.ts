import { Component, OnInit } from '@angular/core';
import { NourritureService } from '../../services/nourriture/nourriture.service';
import { Nourriture } from '../../models/nourriture'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-nourriture',
  templateUrl: './list-nourriture.component.html',
  styleUrls: ['./list-nourriture.component.css']
})
export class ListNourritureComponent implements OnInit {

  listNourritures : Nourriture[] = [];
  modif : boolean[] = [];
  nourritureForm: FormGroup;
  submitted:boolean = false;

  constructor(private nourritureService: NourritureService, private formBuilder: FormBuilder) { }

  get f() {return this.nourritureForm.controls};

  ngOnInit() {
    this.nourritureService.getAll().subscribe(data => {
      this.listNourritures = data;
      this.modif.length = this.listNourritures.length;
      this.modif.fill(false);
    })
  }

  delNourriture(id: number, index) {
    this.nourritureService.delete(id).subscribe((res: Response) => {
      if (!res) {
        Swal.fire(
                "La nourriture n'a pas pu être supprimée car elle est affiliée à au moins un animal",
              )
      } else {
        if (res){
          this.listNourritures.splice(index, 1);
          Swal.fire(
                    'Nourriture supprimée!',
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
      text: "La suppression de cette nourriture sera définitive",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, je veux la supprimer'
    }).then((result) => {
      if (result.value) {
        this.delNourriture(id, index)
      }
    })
  }   

  dispform(index:number){
    this.modif.fill(false);
    this.modif[index] = true;
    this.nourritureForm = this.formBuilder.group({
      stock: ['', Validators.required],
    })
  }

  onSubmit(id:number, stock:number){
    this.submitted=true;
    if (this.nourritureForm.invalid){
      return;
    } else{
      this.modifStock(id , stock);
      this.modif.fill(false);
    }
  }

  modifStock(id:number, stock:number){
    this.nourritureService.modifStock(id,stock).subscribe((res:Response) =>{
      if(!res){
        Swal.fire(
          "Le stock de la nourriture n'a pas pu être modifié",
        )
      }else{
        Swal.fire(
          "Le stock de la nourriture a bien été modifié",
        )
      }
    })
  }

}
