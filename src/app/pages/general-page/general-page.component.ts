import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';


@Component({
  selector: 'app-general-page',
  templateUrl: './general-page.component.html',
  styleUrls: ['./general-page.component.scss'],
  animations: [
    trigger('slideFade', [
      transition('* <=> *', [
        // Startowy styl, element jest po prawej i niewidoczny
        style({
          opacity: 0,
          transform: 'translateX(100%)'
        }),
        // Animacja do końcowego stylu, element jest na miejscu i widoczny
        animate('0.5s ease-out', style({
          opacity: 1,
          transform: 'translateX(0)'
        })),
        // Opcjonalnie, można dodać animację opuszczenia
        animate('0.5s ease-in', style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }))
      ])
    ])
  ]
})
export class GeneralPageComponent implements OnInit {

  currentAnimation!: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // Nasłuchiwanie zmian w routerze
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.activatedRoute.firstChild;
        while (child!.firstChild) {
          child = child!.firstChild;
        }
        if (child!.snapshot.data['animation']) {
          return child!.snapshot.data['animation'];
        }
        return ''; // Domyślna wartość, jeśli nie ma danych animacji
      })
    ).subscribe((animation: string) => {
      this.currentAnimation = animation;
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
