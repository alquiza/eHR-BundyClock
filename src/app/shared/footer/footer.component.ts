import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project, Principal, Contractor } from '../../api';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  projects: Observable<Project[]>;
  principals: Observable<Principal[]>;
  contractors: Observable<Contractor[]>;

  project: Project = new Project();
  principal: Principal = new Principal();
  contractor: Contractor = new Contractor();

  footerNote00 = 'Copyright ';
  footerNote01 = 'All rights reserved. ';

  constructor(
    public api: ApiService,
  ) { }

  ngOnInit(): void {
  }

  projectName() {
    this.api.readAllProjects()
      .subscribe(
        projectData => { this.projects = projectData; },
        error => { console.log(error); },
      );
  }

  principalName() {
    this.api.readAllPrincipals()
      .subscribe(
        principalData => { this.principals = principalData; },
        error => { console.log(error); },
      );
  }

  contractorNames() {
    this.api.readAllContractors()
      .subscribe(
        contractorData => { this.contractors = contractorData; },
        error => { console.log(error); },
      );
  }

}
