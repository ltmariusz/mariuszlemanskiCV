import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  redrictToInstagram() {
    window.location.href = 'https://www.instagram.com/ltmariusz/'
  }
  redrictToLinkedIn() {
    window.location.href = 'https://www.linkedin.com/in/mariusz-lema%C5%84ski/'
  }
}
