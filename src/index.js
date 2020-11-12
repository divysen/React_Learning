import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from '../src/store/reducers/counter';
import resultsReducer from '../src/store/reducers/result';

const rootReducer = combineReducers({
    counter : counterReducer,
    results : resultsReducer
});

const Store = createStore(rootReducer);
ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();