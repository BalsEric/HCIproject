import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  link: string;
  constructor( @Inject(MAT_DIALOG_DATA) data) {
    console.log(data);
    this.link = data.response.token;
  }

  ngOnInit(): void {
  }

}
