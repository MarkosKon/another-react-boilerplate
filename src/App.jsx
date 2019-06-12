import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Loadable from 'react-loadable';

import Loading from './components/Loading';
import Layout from './layouts/Layout';

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ './pages/Home.tsx'),
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
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Layout key="/" title="Homepage" metaDescription="This is our homepage.">
              <LoadableHome />
            </Layout>
          )}
        />
        <Route
          render={() => (
            <Layout
              key="/notfound"
              title="Page not found"
              metaDescription="The page was not found."
            >
              <LoadableNotFound />
            </Layout>
          )}
        />
      </Switch>
    </Router>
  </>
);

export default App;
