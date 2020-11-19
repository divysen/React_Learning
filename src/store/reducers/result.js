import * as ActionType from '../actions/actionType';

const initialState = {
    results: []
};

const results_reducer = ( state = initialState, action ) => {
    let newState = null;
    switch( action.type ){
        case ActionType.ADD_RESULT:
            newState = {...state};
            newState.results = state.results.concat({id: new Date(), val: action.result});
            return newState;
        case ActionType.DELETE_RESULT:
            newState = {...state};
            const newResults = state.results.filter( elem => elem.id !== action.id );
            newState.results = newResults;
            return newState;
        default:
            return state;
    }
};

export default results_reducer;