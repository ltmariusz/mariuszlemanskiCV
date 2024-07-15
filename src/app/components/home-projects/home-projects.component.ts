import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface ProjectsArray {
  name: string;
  description: string;
  img?: string;
  technology?: string;
  url?: string;
  color?: string;
  isHovered?: boolean;
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
        color: '#2b38c4',
        isHovered: false,
      },
      {
        name: 'FrontendoweABC',
        description:
          'wskazówki dla początkujacych frontendowców związane z html/css/js',
        img: 'fABCN.png',
        technology: 'html/css/js',
        url: 'https://papaya-empanada-c964c9.netlify.app/',
        color: '#7B8D86',
        isHovered: false,
      },
    ];
    for (let i = 0; i < this.listOfProject.length; i++) {
      this.giveColorToShadow(i, this.listOfProject[i].color!);
    }
  }

  giveColorToShadow(index: number, color: string) {}

  redrictTo(url: string) {
    window.open(url, '_blank');
  }
}
