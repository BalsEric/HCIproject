import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {Question} from '../../interfaces/question';

@Component({
  selector: 'app-qtype',
  templateUrl: './qtype.component.html',
  styleUrls: ['./qtype.component.scss']
})
export class QtypeComponent implements OnInit {
  @Input() question: Question;
  @Input() index: number;
  @Input() type: string;
  @Output() handleDeleteQ = new EventEmitter<void>();
  constructor() { }
  ngOnInit(): void {
  }

  openEditDialog() {
  }

  openDeleteDialog() {
    this.handleDeleteQ.emit();
  }
}
