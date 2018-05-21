import * as TableActions from '../actions/tableActions';

export function TableReducer(state = [] , action : TableActions.Action){
    switch(action.type){
        case TableActions.LOADTABLESUCCESS : {
            return action.payload;
        }
        default :{
            return state;
        }
    }
}
