import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import Helmet from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';

import Loading from './components/Loading';
// import App from './App';
import stats from './dist/react-loadable.json';

const path = require('path');
// const stats = require('./react-loadable.json');

const LoadableApp = Loadable({
  loader: () => import('./App'),
  loading: Loading,
  webpack: () => [require.resolveWeak('./App')],
});

const app = express();

const port = 3000;

app.get('*', (req, res) => {
  const sheet = new ServerStyleSheet();
  const context = {};
  const modules = [];
  const html = renderToString(
    sheet.collectStyles(
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <StaticRouter location={req.url} context={context}>
          {/* <App /> */}
          <LoadableApp />
        </StaticRouter>
      </Loadable.Capture>,
    ),
  );
  const bundles = getBundles(stats, modules);
  const helmet = Helmet.renderStatic();
  const styleTags = sheet.getStyleTags();
  res.send(`
    <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
          ${styleTags}
        </head>
        <body>
          <div id="root">${html}</div>
          ${bundles.map(bundle => `<script src="/dist/${bundle.file}"></script>`).join('\n')}
        </body>
      </html>
    `);
});

app.use('/dist', express.static(path.join(__dirname, 'dist')));

Loadable.preloadAll()
  .then(() => {
    app.listen(port, () => console.log(`Listening http://localhost:${port}`));
  })
  .catch((err) => {
    console.log(err);
  });
