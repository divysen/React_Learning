import * as ActionType from './actionType';

export const increment = () => {
    return{
        type: ActionType.INCREMENT
    }
};

export const decrement = () => {
    return{
        type: ActionType.DECREMENT
    }
};

export const add = () => {
    return{
        type: ActionType.ADD,
        value: 5
    }
};

export const substract = () => {
    return{
        type: ActionType.SUBSTRACT,
        value: 5
    }
};