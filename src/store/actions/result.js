import * as ActionType from './actionType';

/** here, instead of providing synchronous action creator, we return a asynchronous function in which we call
 * our synchronous action creator. This feature is provided by thunk package.
 */
export const addResult = (res) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(storeResult(res));
        }, 1000);
    };
};

export const deleteResult = (ID) => {
    return{
        type: ActionType.DELETE_RESULT,
        id: ID
    }
};

/** this is a synchronous action creator, which will be called inside a asynchronous function. */
const storeResult = res => {
    return{
        type: ActionType.ADD_RESULT,
        result: res
    }
};