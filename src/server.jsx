import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import Helmet from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';

import App from './App';
// import stats from '../react-loadable.json';

// const path = require('path');

const app = express();

const port = 4000;

app.use(express.static('dist'));
// app.use('/dist', express.static(path.join(__dirname, 'dist')));
// app.use(express.static(path.join(__dirname, 'dist')));

const stats = import('../dist/react-loadable.json'); // eslint-disable-line import/no-unresolved

app.get('*', (req, res) => {
  const sheet = new ServerStyleSheet();
  const context = {};
  const modules = [];
  const html = renderToString(
    sheet.collectStyles(
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Loadable.Capture>,
    ),
  );
  const bundles = getBundles(stats, modules);
  const helmet = Helmet.renderStatic();
  const styleTags = sheet.getStyleTags();
  res.send(`
    <!DOCTYPE html>
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
          <script src="http://localhost:4000/dist/main.fb0e3430a33d0fb92929.js"></script>
          ${bundles.map(bundle => `<script src="/dist/${bundle.file}"></script>`).join('\n')}
        </body>
      </html>
    `);
});

Loadable.preloadAll()
  .then(() => {
    app.listen(port, () => console.log(`Listening http://localhost:${port}`)); // eslint-disable-line no-console
  })
  .catch((err) => {
    console.log(err); // eslint-disable-line no-console
  });
