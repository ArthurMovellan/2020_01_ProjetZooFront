import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Animal } from '../../models/animal';
import { AnimalService } from '../../services/animal/animal.service';
import { Enclos } from '../../models/enclos';
import { EnclosService } from '../../services/enclos/enclos.service';
import { Nourriture } from '../../models/nourriture';
import { NourritureService } from '../../services/nourriture/nourriture.service';
import { remove } from 'remove-accents'
import { AuthentificationService } from 'src/app/services/authentification/authentification.service';

@Component({
  selector: 'app-manager-update-animal',
  templateUrl: './manager-update-animal.component.html',
  styleUrls: ['./manager-update-animal.component.css']
})
export class ManagerUpdateAnimalComponent implements OnInit {

  id: number;
  animalcourant: Animal = new Animal();
  encloscourant: Enclos = new Enclos();
  nourriturecourant: Nourriture = new Nourriture();
  listEnclos: Enclos[] = [];
  listNourritures: Nourriture[] = [];
  animalForm: FormGroup;
  submitted = false;
  pastNbAnimalAnimal : number;

  constructor(private animalService: AnimalService, private authentificationService :AuthentificationService, private enclosService: EnclosService, private nourritureService :NourritureService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  get f() { return this.animalForm.controls };

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.animalService.getById(this.id).subscribe(data => {
      this.animalcourant = data;
      this.encloscourant = this.animalcourant.enclos;
      this.nourriturecourant = this.animalcourant.nourriture;
      this.pastNbAnimalAnimal = this.animalcourant.nbAnimal;
    });
    this.animalForm = this.formBuilder.group({
      espece: ['', Validators.required],
      enclos: ['', Validators.required],
      nbAnimal : ['', Validators.required],
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

  onSubmit() {
    this.submitted = true;
    if (this.animalForm.invalid) {
      return;
    } else {
      this.modifierAnimal();
    }
  }

  onReset() {
    this.submitted = false;
    this.animalForm.reset;
  }

  modifierAnimal() {
    this.animalcourant.enclos = this.encloscourant;
    this.animalcourant.nourriture = this.nourriturecourant;
    this.enclosService.getById(this.encloscourant.id).subscribe(data=>{
      let pastNbAnimalEnclos : number = data.nbAnimal;
      this.enclosService.affecterNbAnimalEnclos(this.encloscourant.id, pastNbAnimalEnclos-this.pastNbAnimalAnimal+this.animalcourant.nbAnimal).subscribe(res =>{
        if (res == 2){
          this.animalService.update(this.id, this.animalcourant).subscribe(res =>{
            if (res){
              this.notifok();
            }
          })
        }else if(res == 1){
          this.notiftrop();
        }else if(res ==2){
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
