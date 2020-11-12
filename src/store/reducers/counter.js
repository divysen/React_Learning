import * as ActionType from '../../store/action';

const initialState = {
    counter: 0
};

const counter_reducer = ( state = initialState, action ) => {
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
        default:
            return state;
    }
};

export default counter_reducer;