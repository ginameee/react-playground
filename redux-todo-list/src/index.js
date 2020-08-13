import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './components/App';
import { createStore } from 'redux';
import modules from './modules';
import { Provider } from 'react-redux';

const store = createStore(modules, window.devToolsExtensions && window.devToolsExtensions());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);