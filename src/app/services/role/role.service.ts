import { Injectable } from '@angular/core';
import { Role } from 'src/app/models/role';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Role[]>("http://localhost:8080/role").pipe();
  }

  add(role : Role){
    return this.http.post("http://localhost:8080/role", role).pipe();
  }

  delete(id : number){
    return this.http.delete("http://localhost:8080/role/"+ id).pipe();
  }

  getById(id : number){
    return this.http.get<Role>("http://localhost:8080/role/" + id).pipe();
  }

  update(id:number, role:Role){
    return this.http.put("http://localhost:8080/role/" + id, role).pipe();
  }
}
