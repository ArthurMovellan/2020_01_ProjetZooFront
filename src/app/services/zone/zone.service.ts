import { Injectable } from '@angular/core';
import { Zone } from 'src/app/models/zone';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Zone[]>("http://localhost:8080/zone").pipe();
  }

  add(zone : Zone){
    return this.http.post("http://localhost:8080/zone", zone).pipe();
  }

  delete(id : number){
    return this.http.delete("http://localhost:8080/zone/"+ id).pipe();
  }

  getById(id : number){
    return this.http.get<Zone>("http://localhost:8080/zone/" + id).pipe();
  }

  update(id:number, zone:Zone){
    return this.http.put("http://localhost:8080/zone/" + id, zone).pipe();
  }

  getByNom(zone:string){
    return this.http.get<Zone>("http:///localhost:8080/zone/nom" + zone).pipe();
  }
}
