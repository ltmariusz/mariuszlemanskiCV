import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-title-with-picture',
  templateUrl: './title-with-picture.component.html',
  styleUrls: ['./title-with-picture.component.scss']
})
export class TitleWithPictureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const typedText = new Typed(document.getElementById('typedText'), {
      strings: ['Programistę^2000','Developera^1000','Pracownika^1000'],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true,
    });
  }

  
  initTyped() {
    let options1 = {
      strings: ['git push --force ^1000\n `pushed to origin with option force`'],
      // typeSpeed: 50,
      // showCursor: true,
      // cursorChar: '|',
      // // showCursor: false,

      // onComplete: () => {
      //   // Ukryj kursor po zakończeniu pisania
      //   // cursor.hidden = true; // Może nie działać w zależności od wersji Typed.js
      //   // Lub bezpośrednie ukrycie elementu kursora
      
      // },
      // contentType:'html'
    };

    new Typed('#element1', options1);
  }

  initTyped2() {
    const options2 = {
      strings: ["Właśnie znalazłeś idealnego programistę^1000", "Właśnie znalazłeś idealnego pracownika"],
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: true,
      cursorChar: '|',
      loop: false,
      startDelay: 500,

    };

    new Typed('#element2', options2);
  }

}
