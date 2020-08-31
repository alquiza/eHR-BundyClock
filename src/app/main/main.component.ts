import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  companyName = 'Gemphil Technologies, Inc.';
  appName = 'Attendance Bundy Clock';
  constructor() { }

  ngOnInit(): void {
  }

}
