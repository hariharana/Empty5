import {Injectable} from '@angular/core';
import {Effect,Actions} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import  'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/map'
import * as tableActions from '../actions/tableActions';
import { Observable } from "rxjs";

import {SampletableserviceService} from '../dashboard/sampletable/sampletableservice.service'


@Injectable(

)
export class TableEffects{
    private sampletableservice;
    constructor(private http : HttpClient , private actions$ : Actions){
        this.sampletableservice = new SampletableserviceService(this.http)
    }
    
    @Effect() loadTable = this.actions$.
    ofType<tableActions.LoadTable>(tableActions.LOADTABLE).map(action => action.payload)
    .switchMap((payload)=>this.sampletableservice.getRepoIssues(payload.item ,payload.direction , payload.pageNo)
    .map(github => ( new tableActions.LoadTableSuccess(github) ))
    );

}
