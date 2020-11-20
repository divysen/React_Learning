import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import counterReducer from '../src/store/reducers/counter';
import resultsReducer from '../src/store/reducers/result';

const rootReducer = combineReducers({
    ctr : counterReducer,
    rst : resultsReducer
});

// adding custom middleware function
const logger = store => {
    return next => {
        return action => {
            //console.log('[Middleware] dispatching', action);
            next(action);
            //console.log('[Middleware] state', store.getState());
            //return result;
        }
    } 
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));
ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();