import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
import myLogger from './lib/myLogger';

const store = createStore(modules, applyMiddleware(myLogger));

export default store;