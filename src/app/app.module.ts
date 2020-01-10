import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { JwtModule } from '@auth0/angular-jwt';
import { NgTempusdominusBootstrapModule } from 'ngx-tempusdominus-bootstrap';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
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
import { AddRoleComponent } from './add/add-role/add-role.component';
import { UpdateRoleComponent } from './update/update-role/update-role.component';
import { ListRoleComponent } from './list/list-role/list-role.component';
import { AddTacheComponent } from './add/add-tache/add-tache.component';
import { ListTacheComponent } from './list/list-tache/list-tache.component';
import { UpdateTacheComponent } from './update/update-tache/update-tache.component';
import { AddZoneComponent } from './add/add-zone/add-zone.component';
import { UpdateZoneComponent } from './update/update-zone/update-zone.component';
import { ListZoneComponent } from './list/list-zone/list-zone.component';
import { AccueilManagerComponent } from './accueil-manager/accueil-manager.component';
import { AccueilAdministrateurComponent } from './accueil-administrateur/accueil-administrateur.component';
import { AccueilPersonnelComponent } from './accueil-personnel/accueil-personnel.component';
import { ManagerAddAnimalComponent } from './add/manager-add-animal/manager-add-animal.component';
import { ManagerUpdateAnimalComponent } from './update/manager-update-animal/manager-update-animal.component';
import { ManagerListAnimalComponent } from './list/manager-list-animal/manager-list-animal.component';
import { ManagerAddEnclosComponent } from './add/manager-add-enclos/manager-add-enclos.component';
import { ManagerListEnclosComponent } from './list/manager-list-enclos/manager-list-enclos.component';
import { ManagerUpdateEnclosComponent } from './update/manager-update-enclos/manager-update-enclos.component';
import { ManagerAddNourritureComponent } from './add/manager-add-nourriture/manager-add-nourriture.component';
import { ManagerUpdateNourritureComponent } from './update/manager-update-nourriture/manager-update-nourriture.component';
import { ManagerListNourritureComponent } from './list/manager-list-nourriture/manager-list-nourriture.component';
import { ManagerAddTacheComponent } from './add/manager-add-tache/manager-add-tache.component';
import { ManagerUpdateTacheComponent } from './update/manager-update-tache/manager-update-tache.component';
import { ManagerListTacheComponent } from './list/manager-list-tache/manager-list-tache.component';
import { UpdateProfilComponent } from './update/update-profil/update-profil.component';
import { PlanningComponent } from './planning/planning.component';
import { ManagerListPersonneComponent } from './list/manager-list-personne/manager-list-personne.component';
import { PersonnelListNourritureComponent } from './list/personnel-list-nourriture/personnel-list-nourriture.component';
import { PersonnelListAnimalComponent } from './list/personnel-list-animal/personnel-list-animal.component';
import { PersonnelListEnclosComponent } from './list/personnel-list-enclos/personnel-list-enclos.component';
import { PersonnelAddTacheComponent } from './add/personnel-add-tache/personnel-add-tache.component';
import { PersonnelUpdateTacheComponent } from './update/personnel-update-tache/personnel-update-tache.component';
import { PersonnelListTacheComponent } from './list/personnel-list-tache/personnel-list-tache.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FooterComponent,
    HeaderComponent,
    ListAnimalComponent,
    AddAnimalComponent,
    UpdateAnimalComponent,
    ListEtatComponent,
    AddEtatComponent,
    UpdateEtatComponent,
    ListEnclosComponent,
    AddEnclosComponent,
    UpdateEnclosComponent,
    ListNourritureComponent,
    AddNourritureComponent,
    UpdateNourritureComponent,
    ListPersonneComponent,
    AddPersonneComponent,
    UpdatePersonneComponent,
    AddRoleComponent,
    UpdateRoleComponent,
    ListRoleComponent,
    AddTacheComponent,
    ListTacheComponent,
    UpdateTacheComponent,
    AddZoneComponent,
    UpdateZoneComponent,
    ListZoneComponent,
    AccueilManagerComponent,
    AccueilAdministrateurComponent,
    AccueilPersonnelComponent,
    ManagerAddAnimalComponent,
    ManagerUpdateAnimalComponent,
    ManagerListAnimalComponent,
    ManagerAddEnclosComponent,
    ManagerListEnclosComponent,
    ManagerUpdateEnclosComponent,
    ManagerAddNourritureComponent,
    ManagerUpdateNourritureComponent,
    ManagerListNourritureComponent,
    ManagerAddTacheComponent,
    ManagerUpdateTacheComponent,
    ManagerListTacheComponent,
    UpdateProfilComponent,
    PlanningComponent,
    ManagerListPersonneComponent,
    PersonnelListNourritureComponent,
    PersonnelListAnimalComponent,
    PersonnelListEnclosComponent,
    PersonnelAddTacheComponent,
    PersonnelUpdateTacheComponent,
    PersonnelListTacheComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    JwtModule,
    NgTempusdominusBootstrapModule,
    FullCalendarModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
