import '@babel/polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import { renderToStaticMarkup } from 'react-dom/server';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import { ServerStyleSheet } from 'styled-components'
import Loadable from 'react-loadable';

import Loading from './components/Loading';
import App from './App';

const LoadableApp = Loadable({
  loader: () => import('./App'),
  loading: Loading,
});

if (typeof document !== 'undefined') {
  hydrate(
    <BrowserRouter>
      <LoadableApp />
      {/* <App /> */}
    </BrowserRouter>,
    document.getElementById('root'),
  );

  // Check that service workers are registered
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }
}

export default function render(locals) {
  const sheet = new ServerStyleSheet();
  const assets = Object.keys(locals.webpackStats.compilation.assets);
  const css = assets.filter(value => value.match(/\.css$/));
  const js = assets.filter(value => value.match(/\.js$/));
  const context = {};
  const html = renderToStaticMarkup(
    sheet.collectStyles(
      // <Loadable
      <StaticRouter location={locals.path} context={context}>
        <App />
        {/* <LoadableApp /> */}
      </StaticRouter>,
    ),
  );
  const helmet = Helmet.renderStatic();
  const styleTags = sheet.getStyleTags();
  return `
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${css && css.map(linkSrc => `<link href="${linkSrc}" />`)}
        ${styleTags}
      </head>
      <body>
        <div id="root">${html}</div>
        ${js.map(scriptSrc => `<script src="/${scriptSrc}"></script>`)}
      </body>
    </html>
  `;
}
