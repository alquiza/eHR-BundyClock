import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shift-card',
  templateUrl: './shift-card.component.html',
  styleUrls: ['./shift-card.component.scss']
})

export class ShiftCardComponent implements OnInit {


  SHIFT = 'SHIFT';
  date = new Date();

  shift: any;
  constructor() { }

  ngOnInit() { this.shiftIndicator(this.date = new Date); }

  shiftIndicator(date: Date) {
    const hours = date.getHours();
    this.shift = hours >= 22 ? '3rd' :
    this.shift = hours >= 14 ? '2nd' :
    this.shift = hours >= 6 ? '1st' :
    this.shift = hours <= 6 ? '3rd' : '';
  }
}
