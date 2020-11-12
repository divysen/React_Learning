import * as ActionType from '../store/action';

const initialState = {
    counter: 0,
    results: []
};

const reducer = ( state = initialState, action ) => {
    const newState = {...state};
    switch( action.type ){
        case ActionType.INCREMENT:
            newState.counter = state.counter + 1;
            return newState;
        case ActionType.DECREMENT:
            newState.counter = state.counter - 1;
            return newState;
        case ActionType.ADD:
            newState.counter = state.counter + action.value;
            return newState;
        case ActionType.SUBSTRACT:
            newState.counter = state.counter - action.value;
            return newState;
        case ActionType.RESULT:
            newState.results = state.results.concat({id: new Date(), val: state.counter});
            return newState;
        case ActionType.DELETE_RESULT:
            const newResults = state.results.filter( elem => elem.id !== action.id );
            newState.results = newResults;
            return newState;
        default:
            return state;
    }
};

export default reducer;