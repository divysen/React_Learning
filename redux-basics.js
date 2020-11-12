const redux = require('redux');
const creatStore = redux.createStore;

// 1.
const initialState = {
    counter: 0
};

// 2. Reducer 
const rootReducer = function(state = initialState, action){
    if( action.type === 'INC_COUNTER' ){
        return{
            ...state,
            counter: state.counter + 1
        }
    }
    else if( action.type === 'ADD_COUNTER' ){
        return{
            ...state,
            counter: state.counter + action.value
        }
    }
    else{
        return state;
    }
};

// 3. Store
const store = creatStore(rootReducer);
console.log(`before action `,store.getState());

// 4. Subscription
store.subscribe(() => {
    console.log('[subscription] Update Counter Value is', store.getState());
});

// 5. (Dipatching) Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 5});
// console.log(`after action `,store.getState());