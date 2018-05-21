import { Component, OnInit , ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {merge} from 'rxjs/observable/merge';
import {of as observableOf} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {startWith} from 'rxjs/operators/startWith';
import {switchMap} from 'rxjs/operators/switchMap';
import {Store, select} from '@ngrx/store';
import * as tableActions from '../../actions/tableActions';
import {SampletableserviceService} from './sampletableservice.service';
import {AppState} from '../../appModels/app-state';
import {gitHubDataSource} from './githubtableDataSource'
import { GithubApi, GithubIssue } from '../../appModels/githubModels';

@Component({
  selector: 'sampletable',
  templateUrl: './sampletable.component.html',
  styleUrls: ['./sampletable.component.css'],
  providers:[SampletableserviceService]
})
export class SampletableComponent implements OnInit {
  displayedColumns = ['created', 'state', 'number', 'title'];
  dataSource : gitHubDataSource;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  
  viewData$ ;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private exampleDatabase:SampletableserviceService , 
    private store : Store<AppState>
  ) {
    this.viewData$= this.store.select('GithubApi').select('items');
  }


  ngOnInit() {
    
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    this.store.dispatch(new tableActions.LoadTable(this.sort.active, this.sort.direction, this.paginator.pageIndex));

    this.isLoadingResults = false;
    this.isRateLimitReached = false;
    this.resultsLength = 1000;

    this.dataSource = new gitHubDataSource(this.viewData$);

    // For retreival from service directly
    // merge(this.sort.sortChange, this.paginator.page)
    //   .pipe(
    //     startWith({}),
    //     switchMap(() => {
    //       this.isLoadingResults = true;
    //       return this.store.dispatch(new tableActions.LoadTable(this.sort.active, this.sort.direction, this.paginator.pageIndex))
    //     }),
    //     map(data => {
    //       // Flip flag to show that loading has finished.
    //       this.isLoadingResults = false;
    //       this.isRateLimitReached = false;
    //       this.resultsLength = data.total_count;

    //       return data.items;
    //     }),
    //     catchError(() => {
    //       this.isLoadingResults = false;
    //       // Catch if the GitHub API has reached its rate limit. Return empty data.
    //       this.isRateLimitReached = true;
    //       return observableOf([]);
    //     })
    //   ).subscribe(data => this.dataSource.data = data);
  }
}