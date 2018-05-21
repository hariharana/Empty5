import {GithubApi} from '../appModels/githubModels';

export const LOADTABLE = 'LOAD_TABLE;';
export const LOADTABLESUCCESS = 'LOAD_TABLE_SUCCESS;';


export class LoadTable{
    readonly type = LOADTABLE;
    public readonly payload: { item : string,direction: string , pageNo: number }
    constructor(public item , public direction , public pageNo){
        this.payload = {
            item ,
            direction, 
            pageNo,
        }
    }
}

export class LoadTableSuccess{
    readonly type = LOADTABLESUCCESS;
    constructor(public payload : any ){}
}

export type Action 
= LoadTable |
LoadTableSuccess
