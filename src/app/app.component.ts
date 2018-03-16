import {MediaMatcher} from '@angular/cdk/layout';
import {FormControl} from '@angular/forms'
import {Observable} from 'rxjs/Observable';
import {ChangeDetectorRef, Component} from '@angular/core';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {Router, NavigationEnd} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  mobileQuery: MediaQueryList;
  fillerNav = Array(10).fill(0).map((_, i) => `Nav Item ${i + 1}`);
  private _mobileQueryListener: () => void;
  myControl: FormControl = new FormControl();
  options = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  public isUserLoggedIn : boolean;
  public _this = this;
  
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private _router : Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.isUserLoggedIn = true;
  }

  routeChangeHandler(event, that){
    var currentRoute =  event instanceof NavigationEnd  ? event : null;
    if(currentRoute && (currentRoute.url != '/' && currentRoute.url !="/login")){
      that.isUserLoggedIn = true;
      debugger;
    } 
  }

  ngOnInit() {
    this.isUserLoggedIn = false;
    this._router.events.subscribe((event) => this.routeChangeHandler(event, this));
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  filter(val: string): string[] {
    return this.options.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
}