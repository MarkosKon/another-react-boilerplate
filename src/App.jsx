import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

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
              <Home />
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
              <NotFound />
            </Layout>
          )}
        />
      </Switch>
    </Router>
  </>
);

export default App;
