import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-technology-bar',
  templateUrl: './technology-bar.component.html',
  styleUrls: ['./technology-bar.component.scss']
})
export class TechnologyBarComponent implements OnInit {
  showVines = false;

  constructor() { }

  ngOnInit(): void {
  }

}
