import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MenuItem } from '../models/MenuItem';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  @Input() appName: string = "SAGWebApp";
  menuItems: MenuItem[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    /*  
      <a mat-list-item href="home">HOME</a>
      <a mat-list-item href="about">ABOUT</a>
      <a mat-list-item href="yarnOrder">YARN ORDER</a>
    */
  }

  changeRoute(path: string)
  {
    this.router.navigate([`${path}`]);
  }
}
