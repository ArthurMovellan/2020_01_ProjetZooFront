
import { Component, OnInit } from '@angular/core';
import { OptionsInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { ActivatedRoute } from '@angular/router';
import { TacheService } from '../services/tache/tache.service';
import { Tache } from '../models/tache';
import { AuthentificationService } from '../services/authentification/authentification.service';
import { PersonneService } from '../services/personne/personne.service';
import { Personne } from '../models/personne';
import Swal from 'sweetalert2';
import allLocales from '@fullcalendar/core/locales-all'


@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

  options: OptionsInput;
  events: any = [];
  eventsModel: any = [];
  fullcalendar: FullCalendarComponent;
  idPersonne: number;
  listTache: Tache[];
  login: string;
  askedP: Personne;
  authorize: boolean = false;

  constructor(private route: ActivatedRoute, private tacheService: TacheService, private authentificationService: AuthentificationService, private personneService: PersonneService) { }

  ngOnInit() {
    this.options = {
      locales : allLocales,
      locale : 'fr',
      editable: false,
      header: {
        left: 'prev,next, today',
        center: 'title',
        right: 'dayGridMonth, timeGridWeek, timeGridDay'
      },
      plugins: [dayGridPlugin, timeGrigPlugin, interactionPlugin]
    };
    this.loadEvents();
  }

  loadEvents() {
    this.idPersonne = parseInt(this.route.snapshot.paramMap.get('id'));
    this.tacheService.getAllByIdPersonne(this.idPersonne).subscribe(data => {
      this.listTache = data;
      for (let tache of this.listTache) {
        let col: string = "";
        if (tache.etat.id == 3) {
          col = 'grey';
        } else if (tache.etat.id == 2) {
          col = 'green';
        } else {
          if (new Date(tache.dateDebut) > new Date()) {
            col = 'green';
          } else {
            if (new Date(tache.dateFin) > new Date()) {
              col = 'orange';
            } else {
              col = 'red';
            }
          }
        }
        this.events.push({
          title: tache.libelle,
          start: tache.dateDebut,
          end: tache.dateFin,
          id: tache.id,
          color: col,
        })
      }
      this.eventsModel = this.events;
      this.verifAuthorize();
    })
  }

  verifAuthorize() {
    this.personneService.getById(this.idPersonne).subscribe(data => {
      this.askedP = data;
      let connectedRole: String = this.authentificationService.storageGetRole();
      if (connectedRole == "Administrateur") {
        this.authorize = true;
      } else if (connectedRole == "Manager") {
        let connectedZone: String = this.authentificationService.storageGetZone();
        if (connectedZone == this.askedP.zone.nom) {
          this.authorize = true;
        }
      } else if (connectedRole == "Personnel") {
        let connectedId: number = parseInt(this.authentificationService.storageGetId());
        if (connectedId == this.askedP.id) {
          this.authorize = true;
        }
      }
      if (!this.authorize) {
        this.logout();
      }
    })
  }

  logout() {
    localStorage.removeItem('currentUser');
    window.location.href = "http://localhost:4200/";
  }

  eventClick(model) {
    if (confirm("Voulez-vous déclarer cette tâche comme faite ?") == true ) {
      this.tacheService.affecterEtat(model.event.id, 2).subscribe((res:Response)=>{
        if (!res){
          Swal.fire("L'état de la tâche n'a pas pu être modifié");
        }else{
          Swal.fire("L'état de la tâche a bien été modifié");
        }
      })
    }
    window.location.reload();
  }

}