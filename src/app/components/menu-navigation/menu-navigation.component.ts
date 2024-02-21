import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-navigation',
  templateUrl: './menu-navigation.component.html',
  styleUrls: ['./menu-navigation.component.scss']
})
export class MenuNavigationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  toHome(){
this.router.navigate([''])
  }
  toCv(){
    this.router.navigate(['./cv'])
  }
}
