// import '@babel/polyfill';
// import React from 'react';
// import { renderToStaticMarkup } from 'react-dom/server';
// import { StaticRouter } from 'react-router-dom';
// import Helmet from 'react-helmet';
// import Loadable from 'react-loadable';

// import Loading from './components/Loading';

// const LoadableApp = Loadable({
//   loader: () => import('./App'),
//   loading: Loading,
// });

// export default function render(locals) {
//   const assets = Object.keys(locals.webpackStats.compilation.assets);
//   const css = assets.filter(value => value.match(/\.css$/));
//   const js = assets.filter(value => value.match(/\.js$/));
//   const context = {};
//   const html = renderToStaticMarkup(
//     <StaticRouter location={locals.path} context={context}>
//       <LoadableApp />
//     </StaticRouter>,
//   );
//   const helmet = Helmet.renderStatic();
//   return `
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
//         ${helmet.title.toString()}
//         ${helmet.meta.description.toString()}
//         ${css && css.map(linkSrc => `<link href="${linkSrc}" />`)}
//       </head>
//       <body>
//         <div id="root">${html}</div>
//         ${js.map(scriptSrc => `<script src="${scriptSrc}"></script>`)}
//       </body>
//     </html>
//   `;
// }
