import { Component, OnInit } from '@angular/core';
import { Animal } from "../../models/animal";
import { AnimalService } from '../../services/animal/animal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from "sweetalert2";
import { Enclos } from "../../models/enclos";
import { EnclosService } from '../../services/enclos/enclos.service';
import { Nourriture } from '../../models/nourriture';
import { NourritureService } from '../../services/nourriture/nourriture.service';
import { remove } from 'remove-accents'
import { AuthentificationService } from 'src/app/services/authentification/authentification.service';

@Component({
  selector: 'app-manager-add-animal',
  templateUrl: './manager-add-animal.component.html',
  styleUrls: ['./manager-add-animal.component.css']
})

export class ManagerAddAnimalComponent implements OnInit {

  nouveauAnimal: Animal = new Animal();
  nouveauEnclos: Enclos = new Enclos();
  nouveauNourriture : Nourriture = new Nourriture();
  animalForm: FormGroup;
  submitted = false;
  listEnclos: Enclos[] = [];
  listNourritures : Nourriture[] = [];

  constructor(private animalService: AnimalService, private authentificationService : AuthentificationService, private enclosService: EnclosService, private nourritureService : NourritureService, private formBuilder: FormBuilder) { }

  get f() {return this.animalForm.controls};

  ngOnInit() {
    this.animalForm = this.formBuilder.group({
      espece: ['', Validators.required],
      enclos: ['', Validators.required],
      nbAnimal: ['', Validators.required],
      nourriture: ['', Validators.required]
    });
    let zonestr : string = this.authentificationService.storageGetZone();
    zonestr = remove(zonestr);
    this.enclosService.getAllByZone(zonestr).subscribe(data => {
      this.listEnclos = data;
    });
    this.nourritureService.getAll().subscribe(data => {
      this.listNourritures = data;
    });
  }

  onSubmit(){
    this.submitted=true;
    if (this.animalForm.invalid){
      return;
    } else{
      this.ajoutAnimal();
    }
  }

  onReset(){ //pour RAZ le formulaire
    this.submitted=false;
    this.animalForm.reset;
  }

  ajoutAnimal() {
    this.nouveauAnimal.enclos = this.nouveauEnclos;
    this.nouveauAnimal.nourriture = this.nouveauNourriture;
    this.enclosService.getById(this.nouveauEnclos.id).subscribe(data =>{
      let pastNbAnimal : number = data.nbAnimal;
      this.enclosService.affecterNbAnimalEnclos(this.nouveauEnclos.id,pastNbAnimal+this.nouveauAnimal.nbAnimal).subscribe(res =>{
        if (res == 2){
          this.animalService.add(this.nouveauAnimal).subscribe(res =>{
            if (res){
              this.notifok();
            }
          })
        }else if (res == 1){
          this.notiftrop();
        }else if (res == 0){
          this.notifechec();
        }
      })
    })
  }

  redirection() {
    window.location.href = "/manager/listanimal";
  }

  notifok() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Animal ajouté!',
      showConfirmButton: false,
      timer: 1500,
      onClose: this.redirection
    })
  }

  notiftrop() {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Le nombre d\'animaux est trop grand pour cet enclos!',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  notifechec() {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'L\'ajout n\'a pas fonctionné',
      showConfirmButton: false,
      timer: 1500,
    })
  }

}
