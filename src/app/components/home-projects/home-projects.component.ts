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
  constructor(private router: Router) { }

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

    }
  }
  getColor(project:any) {
    if (project.isHovered) {
      return this.lightenColor(project.color, 0.8); // Adjust 0.8 to change the intensity of lightening
    }
    return "#ebebeb";
  }

  lightenColor(color: string, factor: number): string {
    let c = parseInt(color.substring(1), 16);

    let r = (c >> 16) & 0xFF;
    let g = (c >> 8) & 0xFF;
    let b = c & 0xFF;

    // Linear interpolation towards white (255, 255, 255)
    r = Math.round(r + factor * (255 - r));
    g = Math.round(g + factor * (255 - g));
    b = Math.round(b + factor * (255 - b));

    return `#${this.componentToHex(r)}${this.componentToHex(g)}${this.componentToHex(b)}`;
  }

  componentToHex(c: number): string {
    const hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }

  redrictTo(url: string) {
    window.open(url, '_blank');
  }
}
