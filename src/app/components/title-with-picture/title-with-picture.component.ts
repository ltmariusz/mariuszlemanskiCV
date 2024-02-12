import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-title-with-picture',
  templateUrl: './title-with-picture.component.html',
  styleUrls: ['./title-with-picture.component.scss']
})
export class TitleWithPictureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const typed = new Typed('#element', {
      strings: ["Za","Zabawny","Zaskakujący","Zaje","Zajadły","Kreatywny" ],
      // ustawić lepsze słowa
      typeSpeed: 50,
      loop:true
      
    });
  }

}
