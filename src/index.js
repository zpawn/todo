import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { store } from './store';
import { history } from './history';
import App from './App';

// How to use history in async action creator
// https://github.com/remix-run/react-router/issues/8264#issuecomment-991271554
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
