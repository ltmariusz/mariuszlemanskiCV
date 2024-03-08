import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface ProjectsArray {
  name: string;
  description: string;
  img?: string;
  technology?: string;
  url?: string;
}

@Component({
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrls: ['./home-projects.component.scss'],
})
export class HomeProjectsComponent implements OnInit {
  constructor(private router: Router) {}

  listOfProject: Array<ProjectsArray> = new Array();

  ngOnInit(): void {
    this.listOfProject = [
      {
        name: 'Cv (to)',
        description: 'strona przedstawiająca informacje o mnie',
        img: 'icon-code.svg',
        technology: 'Angular',
        url: 'mariuszlemanski.com',
      },
      {
        name: 'FrontendoweABC',
        description: 'wskazówki dla początkujacych związane z html/css/js',
        img: 'fABCN.png',
        technology: 'html/css/js',
        url: 'https://papaya-empanada-c964c9.netlify.app/',
      },
    ];
  }

  redrictTo(url: string) {
    this.router.navigate([url]);
  }
}
