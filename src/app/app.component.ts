import {MediaMatcher} from '@angular/cdk/layout';
import {FormControl} from '@angular/forms'
import {Observable} from 'rxjs/Observable';
import {ChangeDetectorRef, Component} from '@angular/core';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {Router, NavigationEnd} from '@angular/router';
import {menuItem} from './appModels/menuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  myControl: FormControl = new FormControl();
  options = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  public isUserLoggedIn : boolean;
  public _this = this;
  appMenu = []; 
  
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private _router : Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.isUserLoggedIn = true;
  }

  generateMenu(){
    this.appMenu = [
      new menuItem("Dashboard", "assessment", "/dashboard", true),
      new menuItem("File Upload","backup","",true),
      new menuItem("Settings","build","",true)
    ];
  }

  routeChangeHandler(event, that){
    var currentRoute =  event instanceof NavigationEnd  ? event : null;
    if(currentRoute && (currentRoute.url != '/' && currentRoute.url !="/login")){
      that.isUserLoggedIn = true;
    } 
  }

  ngOnInit() {
    this.isUserLoggedIn = false;
    this._router.events.subscribe((event) => this.routeChangeHandler(event, this));
    this.generateMenu();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  filter(val: string): string[] {
    return this.options.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
}