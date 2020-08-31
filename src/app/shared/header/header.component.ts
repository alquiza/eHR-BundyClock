import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  appTitle = 'Integrated® iHuman Attendance Systems';
  headButton00 = 'Home';
  headButton01 = 'Login';
  headButton02 = 'Logout';

  constructor() { }

  ngOnInit(): void { }

}
