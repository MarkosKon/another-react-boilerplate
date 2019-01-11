import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Loadable from 'react-loadable';

import Loading from './components/Loading';
import Layout from './layouts/Layout';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import NotFound from './pages/NotFound';

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ './pages/Home'),
  loading: Loading,
});
const LoadableAbout = Loadable({
  loader: () => import('./pages/About'),
  loading: Loading,
});
const LoadableContact = Loadable({
  loader: () => import('./pages/Contact'),
  loading: Loading,
});
const LoadableNotFound = Loadable({
  loader: () => import(/* webpackChunkName: "notfound" */ './pages/NotFound'),
  loading: Loading,
});

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Layout key="/" title="Homepage" metaDescription="This is our homepage.">
            {/* <Home /> */}
            <LoadableHome />
          </Layout>
        )}
      />
      <Route
        path="/about"
        render={() => (
          <Layout key="/about" title="About" metaDescription="This is our about page.">
            <LoadableAbout />
            {/* <About /> */}
          </Layout>
        )}
      />
      <Route
        path="/contact"
        render={() => (
          <Layout key="/contact" title="Contact" metaDescription="This is our contact page.">
            {/* <Contact /> */}
            <LoadableContact />
          </Layout>
        )}
      />
      <Route
        render={() => (
          <Layout key="/notfound" title="Page not found" metaDescription="The page was not found.">
            {/* <NotFound /> */}
            <LoadableNotFound />
          </Layout>
        )}
      />
    </Switch>
  </>
);

export default App;
