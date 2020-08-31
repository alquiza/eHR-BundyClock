import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.scss']
})

export class DigitalComponent implements OnInit {

  date = new Date();

  days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  hour: any;
  minute: string;
  second: string;
  ampm: string;
  day: string;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      const date = new Date;
      this.updateDate(date);
    }, 1000 );
    this.day = this.days[this.date.getDay()];
  }

  updateDate(date: Date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    this.ampm = hours >= 12 ? 'PM' : 'AM';
    this.hour = hours %12;
    this.hour = this.hour ? this.hour : 12;
    this.hour = this.hour > 10 ? 0 + this.hour : this.hour;
    this.minute = minutes < 10 ?  '0' + minutes : minutes.toString();
    this.second = seconds < 10 ? '0' + seconds : seconds.toString();
  }
}
