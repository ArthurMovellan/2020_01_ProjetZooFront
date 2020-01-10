import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AccueilAdministrateurComponent } from './accueil-administrateur/accueil-administrateur.component';
import { AccueilManagerComponent } from './accueil-manager/accueil-manager.component';
import { AccueilPersonnelComponent } from './accueil-personnel/accueil-personnel.component';
import { ListAnimalComponent } from './list/list-animal/list-animal.component';
import { AddAnimalComponent } from './add/add-animal/add-animal.component';
import { UpdateAnimalComponent } from './update/update-animal/update-animal.component';
import { ListEtatComponent } from './list/list-etat/list-etat.component';
import { AddEtatComponent } from './add/add-etat/add-etat.component';
import { UpdateEtatComponent } from './update/update-etat/update-etat.component';
import { ListEnclosComponent } from './list/list-enclos/list-enclos.component';
import { AddEnclosComponent } from './add/add-enclos/add-enclos.component';
import { UpdateEnclosComponent } from './update/update-enclos/update-enclos.component';
import { ListNourritureComponent } from './list/list-nourriture/list-nourriture.component';
import { AddNourritureComponent } from './add/add-nourriture/add-nourriture.component';
import { UpdateNourritureComponent } from './update/update-nourriture/update-nourriture.component';
import { ListPersonneComponent } from './list/list-personne/list-personne.component';
import { AddPersonneComponent } from './add/add-personne/add-personne.component';
import { UpdatePersonneComponent } from './update/update-personne/update-personne.component';
import { ListRoleComponent } from './list/list-role/list-role.component';
import { AddRoleComponent } from './add/add-role/add-role.component';
import { UpdateRoleComponent } from './update/update-role/update-role.component';
import { ListTacheComponent } from './list/list-tache/list-tache.component';
import { AddTacheComponent } from './add/add-tache/add-tache.component';
import { UpdateTacheComponent } from './update/update-tache/update-tache.component';
import { ListZoneComponent } from './list/list-zone/list-zone.component';
import { AddZoneComponent } from './add/add-zone/add-zone.component';
import { UpdateZoneComponent } from './update/update-zone/update-zone.component';
import { AuthGuardAdminService } from './services/auth-guard/admin/auth-guard-admin.service'
import { AuthGuardManagerService } from './services/auth-guard/manager/auth-guard-manager.service'
import { AuthGuardPersonnelService } from './services/auth-guard/personnel/auth-guard-personnel.service'
import { ManagerListAnimalComponent } from './list/manager-list-animal/manager-list-animal.component';
import { ManagerAddAnimalComponent } from './add/manager-add-animal/manager-add-animal.component';
import { ManagerUpdateAnimalComponent } from './update/manager-update-animal/manager-update-animal.component';
import { ManagerListEnclosComponent } from './list/manager-list-enclos/manager-list-enclos.component';
import { ManagerAddEnclosComponent } from './add/manager-add-enclos/manager-add-enclos.component';
import { ManagerUpdateEnclosComponent } from './update/manager-update-enclos/manager-update-enclos.component';
import { ManagerListNourritureComponent } from './list/manager-list-nourriture/manager-list-nourriture.component';
import { ManagerAddNourritureComponent } from './add/manager-add-nourriture/manager-add-nourriture.component';
import { ManagerUpdateNourritureComponent } from './update/manager-update-nourriture/manager-update-nourriture.component';
import { ManagerListTacheComponent } from './list/manager-list-tache/manager-list-tache.component';
import { ManagerAddTacheComponent } from './add/manager-add-tache/manager-add-tache.component';
import { ManagerUpdateTacheComponent } from './update/manager-update-tache/manager-update-tache.component';
import { UpdateProfilComponent } from './update/update-profil/update-profil.component';
import { PlanningComponent } from './planning/planning.component' 
import { ManagerListPersonneComponent } from './list/manager-list-personne/manager-list-personne.component'
import { PersonnelListNourritureComponent } from './list/personnel-list-nourriture/personnel-list-nourriture.component'
import { PersonnelListAnimalComponent } from './list/personnel-list-animal/personnel-list-animal.component'
import { PersonnelListEnclosComponent } from './list/personnel-list-enclos/personnel-list-enclos.component'
import { PersonnelAddTacheComponent } from './add/personnel-add-tache/personnel-add-tache.component'
import { PersonnelListTacheComponent } from './list/personnel-list-tache/personnel-list-tache.component'
import { PersonnelUpdateTacheComponent } from './update/personnel-update-tache/personnel-update-tache.component'

const routes: Routes = [
{
  path:"", //la route de la vue
  component: AccueilComponent //le composant à montrer dans cette vue
},
{
  path:"editprofil", //la route de la vue
  component: UpdateProfilComponent //le composant à montrer dans cette vue
},
{
  path:"admin",
  component: AccueilAdministrateurComponent,
  canActivate : [AuthGuardAdminService]
},
{
  path:"admin/listanimal",
  component: ListAnimalComponent,
  canActivate : [AuthGuardAdminService]
},
{
  path:"admin/ajoutanimal",
  component: AddAnimalComponent,
  canActivate : [AuthGuardAdminService]
},
{
  path:"admin/updateanimal/:id",
  component: UpdateAnimalComponent,
  canActivate : [AuthGuardAdminService]
},
{
  path:"admin/listenclos",
  component: ListEnclosComponent,
  canActivate : [AuthGuardAdminService]
},
{
  path:"admin/ajoutenclos",
  component: AddEnclosComponent,
  canActivate : [AuthGuardAdminService]
},
{
  path:"admin/updateenclos/:id",
  component: UpdateEnclosComponent,
  canActivate : [AuthGuardAdminService]
},
{
  path:"admin/listnourriture",
  component: ListNourritureComponent,
  canActivate : [AuthGuardAdminService]
},
{
  path:"admin/ajoutnourriture",
  component: AddNourritureComponent,
  canActivate : [AuthGuardAdminService]
},
{
  path:"admin/updatenourriture/:id",
  component: UpdateNourritureComponent,
  canActivate : [AuthGuardAdminService]
},
{
  path:"admin/listpersonne",
  component: ListPersonneComponent,
  canActivate : [AuthGuardAdminService]
},
{
  path:"admin/ajoutpersonne",
  component: AddPersonneComponent,
  canActivate : [AuthGuardAdminService]
},
{
  path:"admin/updatepersonne/:id",
  component: UpdatePersonneComponent,
  canActivate : [AuthGuardAdminService]
},
{
  path:"admin/listrole",
  component: ListRoleComponent,
  canActivate : [AuthGuardAdminService]
},
{
  path:"admin/ajoutrole",
  component: AddRoleComponent,
  canActivate : [AuthGuardAdminService]
},
{
  path:"admin/updaterole/:id",
  component: UpdateRoleComponent,
  canActivate : [AuthGuardAdminService]
},
{
  path:"admin/listtache",
  component: ListTacheComponent,
  canActivate : [AuthGuardAdminService]
},
{
  path:"admin/ajouttache",
  component: AddTacheComponent,
  canActivate : [AuthGuardAdminService]
},
{
  path:"admin/updatetache/:id",
  component: UpdateTacheComponent,
  canActivate : [AuthGuardAdminService]
},
{
  path:"admin/listzone",
  component: ListZoneComponent,
  canActivate : [AuthGuardAdminService]
},
{
  path:"admin/ajoutzone",
  component: AddZoneComponent,
  canActivate : [AuthGuardAdminService]
},
{
  path:"admin/updatezone/:id",
  component: UpdateZoneComponent,
  canActivate : [AuthGuardAdminService]
},
{
  path:"admin/listetat",
  component: ListEtatComponent,
  canActivate : [AuthGuardAdminService]
},
{
  path:"admin/ajoutetat",
  component: AddEtatComponent,
  canActivate : [AuthGuardAdminService]
},
{
  path:"admin/updateetat/:id",
  component: UpdateEtatComponent,
  canActivate : [AuthGuardAdminService]
},
{
  path:"manager",
  component: AccueilManagerComponent,
  canActivate : [AuthGuardManagerService]
},
{
  path:"manager/listanimal",
  component: ManagerListAnimalComponent,
  canActivate : [AuthGuardManagerService]
},
{
  path:"manager/ajoutanimal",
  component: ManagerAddAnimalComponent,
  canActivate : [AuthGuardManagerService]
},
{
  path:"manager/updateanimal/:id",
  component: ManagerUpdateAnimalComponent,
  canActivate : [AuthGuardManagerService]
},
{
  path:"manager/listenclos",
  component: ManagerListEnclosComponent,
  canActivate : [AuthGuardManagerService]
},
{
  path:"manager/ajoutenclos",
  component: ManagerAddEnclosComponent,
  canActivate : [AuthGuardManagerService]
},
{
  path:"manager/updateenclos/:id",
  component: ManagerUpdateEnclosComponent,
  canActivate : [AuthGuardManagerService]
},
{
  path:"manager/listnourriture",
  component: ManagerListNourritureComponent,
  canActivate : [AuthGuardManagerService]
},
{
  path:"manager/ajoutnourriture",
  component: ManagerAddNourritureComponent,
  canActivate : [AuthGuardManagerService]
},
{
  path:"manager/updatenourriture/:id",
  component: ManagerUpdateNourritureComponent,
  canActivate : [AuthGuardManagerService]
},
{
  path:"manager/listpersonne",
  component: ManagerListPersonneComponent,
  canActivate : [AuthGuardManagerService]
},
{
  path:"manager/listtache",
  component: ManagerListTacheComponent,
  canActivate : [AuthGuardManagerService]
},
{
  path:"manager/ajouttache",
  component: ManagerAddTacheComponent,
  canActivate : [AuthGuardManagerService]
},
{
  path:"manager/updatetache/:id",
  component: ManagerUpdateTacheComponent,
  canActivate : [AuthGuardManagerService]
},
{
  path:"personnel",
  component:AccueilPersonnelComponent,
  canActivate : [AuthGuardPersonnelService]
},
{
  path:"personnel/listanimal",
  component:PersonnelListAnimalComponent,
  canActivate : [AuthGuardPersonnelService]
},
{
  path:"personnel/listenclos",
  component:PersonnelListEnclosComponent,
  canActivate : [AuthGuardPersonnelService]
},
{
  path:"personnel/listnourriture",
  component:PersonnelListNourritureComponent,
  canActivate : [AuthGuardPersonnelService]
},
{
  path:"personnel/ajouttache",
  component:PersonnelAddTacheComponent,
  canActivate : [AuthGuardPersonnelService]
},
{
  path:"personnel/updatetache/:id",
  component:PersonnelUpdateTacheComponent,
  canActivate : [AuthGuardPersonnelService]
},
{
  path:"personnel/listtache",
  component:PersonnelListTacheComponent,
  canActivate : [AuthGuardPersonnelService]
},
{
  path:"planning/:id",
  component:PlanningComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
