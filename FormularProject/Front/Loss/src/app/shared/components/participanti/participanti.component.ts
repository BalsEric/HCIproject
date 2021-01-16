import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Formular} from '../../interfaces/formular';
import {Participant} from '../../interfaces/participants';
import {FormularService} from '../../services/formular.service';
import {ParticipantService} from '../../services/participant.service';


@Component({
  selector: 'app-participanti',
  templateUrl: './participanti.component.html',
  styleUrls: ['./participanti.component.scss'],
  providers: [ParticipantService]
})
export class ParticipantiComponent implements OnInit {
  displayedColumns: string[] = ['position', 'Code', 'FLOTTB', 'FLOTRB', 'SOTL2DOBY', 'SODAM', 'age', 'type', 'PT', 'MG', 'WF', 'WINTMUF', 'WIT'];
  participants: Participant[] = [];
  constructor(private participantService: ParticipantService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.participantService.getParticipants().subscribe(
      (response) => {
        this.participants = response.participants;
        console.log(this.participants);
      },
      error => {
        console.log(error);
        this.participants = [];
      });
  }

  Download() {
    this.participantService.downloadScene().subscribe(
      (response) => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }
}

