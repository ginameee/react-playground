import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counter from './reducers';

const store = createStore(counter, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);