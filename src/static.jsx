import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';

import App from './App';
// eslint-disable-next-line import/no-unresolved
import stats from '../dist/react-loadable.json';

export default function render(locals) {
  const sheet = new ServerStyleSheet();
  const assets = Object.keys(locals.webpackStats.compilation.assets);
  const css = assets.filter(value => value.match(/\.css$/));
  const js = assets.filter(value => value.match(/\.js$/));
  const context = {};
  const modules = [];
  const html = renderToStaticMarkup(
    sheet.collectStyles(
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <StaticRouter location={locals.path} context={context}>
          <App />
        </StaticRouter>
      </Loadable.Capture>,
    ),
  );
  const bundles = getBundles(stats, modules);
  const helmet = Helmet.renderStatic();
  const styleTags = sheet.getStyleTags();
  return Loadable.preloadAll().then(
    () => `
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
            ${bundles.map(bundle => `<script src="/${bundle.file}"></script>`).join('\n')}
            ${js.map(scriptSrc => `<script src="/${scriptSrc}"></script>`)}
          </body>
        </html>
        `,
  );
}
