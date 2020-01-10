import { Component, OnInit } from '@angular/core';
import { NourritureService } from '../../services/nourriture/nourriture.service';
import { Nourriture } from '../../models/nourriture'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-personnel-list-nourriture',
  templateUrl: './personnel-list-nourriture.component.html',
  styleUrls: ['./personnel-list-nourriture.component.css']
})
export class PersonnelListNourritureComponent implements OnInit {

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
          "La stock de la nourriture n'a pas pu être modifié",
        )
      }else{
        Swal.fire(
          "Le stock de la nourriture a bien été modifié",
        )
      }
    })
  }
}
