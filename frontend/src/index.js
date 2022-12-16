import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

//imported styling
import './index.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

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
