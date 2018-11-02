import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

// import reducer from './store/reducer';
import reducerA from './store/reducerA'
import reducerB from './store/reducerB'

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
  rA: reducerA,
  rB: reducerB,
});

const logAction = store => {
  return next => {
    return action => {
      const result = next(action);
      console.log(`caugh in the middleware ${JSON.stringify(result)}`);
      return result;
    }
  }
};

const store = createStore(rootReducer, applyMiddleware(logAction));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
