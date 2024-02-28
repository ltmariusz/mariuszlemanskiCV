import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, group, animateChild } from '@angular/animations';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';


@Component({
  selector: 'app-general-page',
  templateUrl: './general-page.component.html',
  styleUrls: ['./general-page.component.scss'],
  animations: [
    // trigger('slideFade', [
    //   transition('* <=> *', [
    //     // Startowy styl, element jest po prawej i niewidoczny
    //     style({
    //       opacity: 0,
    //       transform: 'translateX(100%)'
    //     }),
    //     // Animacja do końcowego stylu, element jest na miejscu i widoczny
    //     animate('0.5s ease-out', style({
    //       opacity: 1,
    //       transform: 'translateX(0)'
    //     })),
    //     // Opcjonalnie, można dodać animację opuszczenia
    //     animate('0.5s ease-in', style({
    //       opacity: 0,
    //       transform: 'translateX(-100%)'
    //     }))
    //   ])
    // ])
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '100%' })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ left: '-100%', opacity: 0 }))
          ]),
          query(':enter', [
            animate('300ms ease-out', style({ left: '0%' }))
          ])
        ]),
        query(':enter', animateChild()),
      ])
    ])

  ]
})
export class GeneralPageComponent implements OnInit {

  currentAnimation!: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cdr: ChangeDetectorRef) {
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
      this.cdr.detectChanges(); // Wywołaj wykrywanie zmian
    });
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }


    // //////////////////////////////////////Not working

  isLoading = false;

  onActivate(event: any) {
    this.isLoading = false;
  }

  onDeactivate(event: any) {
    this.isLoading = true;
  }
  ///////////////////////////////////////////////////////
}
