import * as ActionType from '../../store/action';

const initialState = {
    results: []
};

const results_reducer = ( state = initialState, action ) => {
    const newState = {...state};
    switch( action.type ){
        case ActionType.RESULT:
            newState.results = state.results.concat({id: new Date(), val: action.result});
            return newState;
        case ActionType.DELETE_RESULT:
            const newResults = state.results.filter( elem => elem.id !== action.id );
            newState.results = newResults;
            return newState;
        default:
            return state;
    }
};

export default results_reducer;