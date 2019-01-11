import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';

import Loading from './components/Loading';

const LoadableApp = Loadable({
  loader: () => import(/* webpackChunkName: "app" */ './App'),
  loading: Loading,
});

ReactDOM.render(<LoadableApp />, document.getElementById('app'));

// Check that service workers are registered
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
