import '@babel/polyfill';
import React from 'react';
import { render, hydrate } from 'react-dom';
// import { renderToStaticMarkup } from 'react-dom/server';
// import { BrowserRouter, StaticRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// import Helmet from 'react-helmet';
// import { ServerStyleSheet } from 'styled-components';
import Loadable from 'react-loadable';
import App from './App';
// import { getBundles } from 'react-loadable/webpack';

// import Loading from './components/Loading';
// import stats from '../dist/react-loadable.json';
// import App from './App';

// const stats = require('../dist/react-loadable.json');
// let stats = {};

// const LoadableApp = Loadable({
//   loader: () => import(/* webpackChunkName: "app" */ './App'),
//   loading: Loading,
//   webpack: () => [require.resolveWeak('./App')],
// });

// if (typeof document !== 'undefined') {
Loadable.preloadReady().then(() => {
  const root = document.getElementById('root');
  if (root.hasChildNodes()) {
    hydrate(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      root,
    );
  } else {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      root,
    );
  }

  // Check that service workers are registered
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }
});
// }

// export default function render(locals) {
//   Loadable.preloadAll().then(() => {
//     const stats = import('../dist/react-loadable.json');
//     const sheet = new ServerStyleSheet();
//     const assets = Object.keys(locals.webpackStats.compilation.assets);
//     const css = assets.filter(value => value.match(/\.css$/));
//     const js = assets.filter(value => value.match(/\.js$/));
//     const context = {};
//     const modules = [];
//     const html = renderToStaticMarkup(
//       sheet.collectStyles(
//         <Loadable.Capture report={moduleName => modules.push(moduleName)}>
//           <StaticRouter location={locals.path} context={context}>
//             <LoadableApp />
//           </StaticRouter>
//         </Loadable.Capture>,
//       ),
//     );
//     const bundles = getBundles(stats, modules);
//     const helmet = Helmet.renderStatic();
//     const styleTags = sheet.getStyleTags();
//     return `
//       <html lang="en">
//         <head>
//           <meta charset="UTF-8" />
//           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//           <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
//           ${helmet.title.toString()}
//           ${helmet.meta.toString()}
//           ${helmet.link.toString()}
//           ${css && css.map(linkSrc => `<link href="${linkSrc}" />`)}
//           ${styleTags}
//         </head>
//         <body>
//           <div id="root">${html}</div>
//           ${bundles.map(bundle => `<script src="/dist/${bundle.file}"></script>`).join('\n')}
//           ${js.map(scriptSrc => `<script src="/${scriptSrc}"></script>`)}
//         </body>
//       </html>
//       `;
//   });
// }
