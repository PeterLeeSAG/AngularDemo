import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MenuItem } from '../models/MenuItem';
import { MenuService } from '../services/menu.services';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  @Input() appName: string = "SAGWebApp";
  menuItems: MenuItem[] = [];
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    menuService : MenuService,
    changeDetectorRef: ChangeDetectorRef,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    media: MediaMatcher) {
    /*  
      <a mat-list-item href="home">HOME</a>
      <a mat-list-item href="about">ABOUT</a>
      <a mat-list-item href="yarnOrder">YARN ORDER</a>
    */
   this.mobileQuery = media.matchMedia('(max-width: 600px)');
   this._mobileQueryListener = () => changeDetectorRef.detectChanges();
   this.mobileQuery.addListener(this._mobileQueryListener);
   this.menuItems = menuService.get();
  }

  changeRoute(path: string)
  {
    this.router.navigate([`${path}`]);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;
}
