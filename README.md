# Another React boilerplate

## Setup
```
git clone https://github.com/MarkosKon/another-react-boilerplate.git 
cd another-react-boilerplate
rm -rf .git
npm i && npm start
```
## Features
* Configured with [Webpack 4](https://webpack.js.org)
* [Eslint](https://eslint.org/) with [AirBnb rules](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) to feel bad about yourself.
* [Jest](https://jestjs.io/) for testing.
* Registers a basic service worker in production with [workbox-webpack-plugin](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin).
* The contents of the public folder are put into the root of the dist folder when building similar to [cra](https://github.com/facebook/create-react-app).
* [pre-commit](https://github.com/pre-commit/pre-commit) runs 'lint' and 'test' scripts before committing with git to ensure code quality and frustration.
* The [App](https://github.com/MarkosKon/another-react-boilerplate/tree/master/src/App.jsx) component holds most of the application state. It renders a Router with the pages wrapped in a [Layout](https://github.com/MarkosKon/another-react-boilerplate/tree/master/src/layouts/Layout.jsx) component.
* The Layout component can be used to wrap the pages. It takes as properties a page title and a description for SEO and a page as child.

## NPM Scripts
```
- npm start: Starts a webpack dev server with hot reloading.
- npm run build: Builds the project and exports at dist folder.
- npm run lint: runs lint on src folder and it's children.
- npm run lint-fix: same as lint but tries to fix the lint errors
- npm run test: runs jest on all files that end with *.test.js
- npm run test-w: runs jest with the --watch flag.
```

## Regular dependencies
* [prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html) for type checking. Eslint with AirBnb requires type checking for your props.
* [react-helmet](https://github.com/nfl/react-helmet) for SEO. It's used in [Layout](https://github.com/MarkosKon/another-react-boilerplate/tree/master/src/layouts/Layout.jsx) for title, meta description, adding icons for site.webmanifest or loading external scripts. 
* [react-router-dom](https://reacttraining.com/react-router/core) for client side routing.
* [styled-components](https://www.styled-components.com/) for component styling.

## Lighthouse score 

[Lighthouse](https://developers.google.com/web/tools/lighthouse/) score for [uploaded project](https://custom-boilerplate.netlify.com/) on Netlify.

![lighthouse score](https://github.com/MarkosKon/another-react-boilerplate/raw/master/public/images/lighthouse-score.jpg)