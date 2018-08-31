# Another React boilerplate
> A minimal, opinionated boilerplate for React.

## Features
* Configured with [Webpack 4]()
* [Eslint]() with [AirBnb rules]() to feel bad about yourself.
* Configured [Jest]() for testing.
* Registers a basic service worker in production with [workbox-webpack-plugin]() from Google.
* the contents of the public folder are put into the root of the dist folder when building like [cra]().
* [pre-commit]() runs 'lint' and 'test' scripts before commiting with git to ensure code quality and frustration.
* The [App.jsx]() component holds most of the application state and renders a router with the pages wrapped in a [Layout]() component.
* There is a [Layout]() component that can be used to wrap the pages. It takes as properties a page title and a description for SEO and a page as child.

## NPM Scripts
```
* npm start: Starts a webpack dev server with hot reloading.
* npm run build: Builds the project (dist folder).
* npm run lint: runs lint on src folder and it's children.
* npm run lint-fix: same as lint but tries to fix the lint errors
* npm run test: runs jest on all files that end with *.test.js
```

## Regular dependencies
* [prop-types]() for type checking. Eslint with AirBnb requires type checking your props.
* [react-helmet]() for SEO. It's used in [Layout.jsx]() for SEO, adding icons for [site.webmanifest]() or loading external scripts. 
* [react-router-dom]() for client side routing.
* [styled-components]() for component styling.

## Lighthouse score 

[Lighthouse]() score for [uploaded project](https://custom-boilerplate.netlify.com/) on Netlify.

![lighthouse score]()