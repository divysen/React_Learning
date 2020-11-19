import * as ActionType from '../actions/actionType';

const initialState = {
    counter: 0
};

const counter_reducer = ( state = initialState, action ) => {
    let newState = null;
    switch( action.type ){
        case ActionType.INCREMENT:
            // return updateState(state, counter, state.counter + 1);
            newState = {...state};
            newState.counter = state.counter + 1;
            return newState;
        case ActionType.DECREMENT:
            newState = {...state};
            newState.counter = state.counter - 1;
            return newState;
        case ActionType.ADD:
            newState = {...state};
            newState.counter = state.counter + action.value;
            return newState;
        case ActionType.SUBSTRACT:
            newState = {...state};
            newState.counter = state.counter - action.value;
            return newState;
        default:
            return state;
    }
};

export default counter_reducer;