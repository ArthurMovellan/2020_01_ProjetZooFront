import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthentificationService } from '../../authentification/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdminService implements CanActivate {

  constructor(private router : Router, private authentificationService : AuthentificationService) { }
  canActivate(next : ActivatedRouteSnapshot, state : RouterStateSnapshot){
    if( this.authentificationService.storageGetRole() == "Administrateur"){
      return true;
    } else {
      this.router.navigate([''])
      return false;
    }
  }

}
