import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ErrorService} from '../../shared/services/error.service';
import {Formular} from '../../shared/interfaces/formular';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ErrorService]
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openBrosuri() {
    this.router.navigate(['home/brochure']);
  }

  openScenarii() {
    this.router.navigate(['home/formular']);
  }

  openParticipanti() {
    this.router.navigate(['home/participanti']);
  }
}
