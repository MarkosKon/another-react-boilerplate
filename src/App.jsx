import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    /* margin: 0; */
  }
`;

const App = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Layout key="/" title="Homepage" metaDescription="This is our homepage.">
            <Home />
          </Layout>
        )}
      />
      <Route
        render={() => (
          <Layout key="/notfound" title="Page not found" metaDescription="The page was not found.">
            <NotFound />
          </Layout>
        )}
      />
    </Switch>
  </Router>
);

export default App;
