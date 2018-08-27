import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import animations from '../utils/animations';

const Content = styled.div`
  padding: 30px 50px 150px;
  width: 80%;
  margin: auto;
  animation: ${animations.fadeIn} 0.4s linear;
  @media screen and (max-width: 600px) {
    width: auto;
    padding: 30px 15px 200px;
  }
`;

const Layout = ({ title, metaDescription, children }) => (
  <React.Fragment>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
    <Content>{children}</Content>
  </React.Fragment>
);

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  metaDescription: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
