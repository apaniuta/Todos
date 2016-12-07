import { createStore, applyMiddleware, compose  } from 'redux';
import rootReducer from '../reducers';

import { gaMiddleware } from '../middlewares/googleAnalitycs';
import { lsMiddleware, loadState } from '../middlewares/localStorage';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const preloadedState = loadState();

export default createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(lsMiddleware, gaMiddleware))
);