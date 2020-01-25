import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import App from './components/App/index';
import './index.css';
import store from './store/index';

ReactDOM.render(
  <Router>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </Router>,
  document.getElementById('root'),
);
