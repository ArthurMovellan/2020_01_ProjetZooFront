import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../services/animal/animal.service';
import { Animal } from '../../models/animal'
import Swal from 'sweetalert2'
import { EnclosService } from 'src/app/services/enclos/enclos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-animal',
  templateUrl: './list-animal.component.html',
  styleUrls: ['./list-animal.component.css']
})
export class ListAnimalComponent implements OnInit {

  listAnimals: Animal[] = [];
  modif: boolean[] = [];
  animalForm: FormGroup;
  submitted: boolean = false;

  constructor(private animalService: AnimalService, private enclosService: EnclosService, private formBuilder: FormBuilder) { }

  get f() { return this.animalForm.controls };

  ngOnInit() {
    this.animalService.getAll().subscribe(data => {
      this.listAnimals = data;
      this.modif.length = this.listAnimals.length;
      this.modif.fill(false);
    })
  }

  delAnimal(id: number, index) {
    this.animalService.getById(id).subscribe(data => {
      let enclosid: number = data.enclos.id;
      let nbAnimal: number = data.nbAnimal;
      this.enclosService.getById(enclosid).subscribe(data => {
        let nbAnimalEnclos: number = data.nbAnimal;
        this.animalService.delete(id).subscribe((res: Response) => {
          if (!res) {
            Swal.fire(
              "L'animal n'a pas pu être supprimé",
            )
          } else {
            this.enclosService.affecterNbAnimalEnclos(enclosid, nbAnimalEnclos - nbAnimal).subscribe(res => {
              if (res == 2) {
                this.listAnimals.splice(index, 1);
                Swal.fire(
                  'Animal supprimé!',
                )
              }
            })
          }
        })
      })
    })
  }

  askfordel(id: number, index) {
    this.notif(id, index);
  }

  notif(id: number, index) {
    Swal.fire({
      title: 'Etes-vous sûr ?',
      text: "La suppression de cet animal sera définitive",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, je veux le supprimer'
    }).then((result) => {
      if (result.value) {
        this.delAnimal(id, index)
      }
    })
  }

  dispform(index: number) {
    this.modif.fill(false);
    this.modif[index] = true;
    this.animalForm = this.formBuilder.group({
      nbAnimal: ['', Validators.required],
    })
  }

  onSubmit(id: number, nbAnimal: number) {
    this.submitted = true;
    if (this.animalForm.invalid) {
      return;
    } else {
      this.modifNbAnimal(id, nbAnimal);
      this.modif.fill(false);
    }
  }

  modifNbAnimal(id: number, nbAnimal: number) {
    this.animalService.getById(id).subscribe(data => {
      let enclosid: number = data.enclos.id;
      let pastnbAnimal: number = data.nbAnimal;
      this.enclosService.getById(enclosid).subscribe(data => {
        let nbAnimalEnclos: number = data.nbAnimal;
        this.enclosService.affecterNbAnimalEnclos(enclosid, nbAnimalEnclos - pastnbAnimal + nbAnimal).subscribe(res => {
          if (res == 2) {
            this.animalService.modifNbAnimal(id, nbAnimal).subscribe((res: Response) => {
              if (!res) {
                this.notifechec();
              } else {
                this.notifok();
              }
            })
          } else if (res == 1) {
            this.notiftrop();
          } else {
            this.notifechec();
          }
        })
      })
    })
  }

  reload(){
    location.reload();
  }

  notifok() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: "Le nombre d'animaux a bien été modifié",
      showConfirmButton: false,
      timer: 1500,
    })
  }

  notiftrop() {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: "L'enclos est trop petit pour accueillir autant d'animaux",
      showConfirmButton: false,
      timer: 1500,
      onClose: this.reload
    })
  }

  notifechec() {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: "Le nombre d'animaux n'a pas pu être modifié",
      showConfirmButton: false,
      timer: 1500,
      onClose: this.reload
    })
  }
  
}
