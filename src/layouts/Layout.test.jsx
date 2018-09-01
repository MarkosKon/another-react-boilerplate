import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Layout title="test page" metaDescription="This is a test page">
      <div />
    </Layout>,
    div,
  );
});
