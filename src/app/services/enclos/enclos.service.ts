import { Injectable } from '@angular/core';
import { Enclos } from 'src/app/models/enclos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnclosService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Enclos[]>("http://localhost:8080/enclos").pipe();
  }

  add(enclos : Enclos){
    return this.http.post("http://localhost:8080/enclos", enclos).pipe();
  }

  delete(id : number){
    return this.http.delete("http://localhost:8080/enclos/"+ id).pipe();
  }

  getById(id : number){
    return this.http.get<Enclos>("http://localhost:8080/enclos/" + id).pipe();
  }

  update(id:number, enclos:Enclos){
    return this.http.put("http://localhost:8080/enclos/" + id, enclos).pipe();
  }

  getAllByZone(zone : String){
    return this.http.get<Enclos[]>("http://localhost:8080/enclos/zone/"+zone).pipe();
  }

  affecterNbAnimalEnclos(id : number, nbAnimal : number){
    return this.http.put("http://localhost:8080/enclos/id:"+id+"/nbAnimal:"+nbAnimal,"").pipe();
  }
}
