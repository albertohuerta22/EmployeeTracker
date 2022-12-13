import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

//imported styling
import './index.css';

//imported files
import App from './App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
