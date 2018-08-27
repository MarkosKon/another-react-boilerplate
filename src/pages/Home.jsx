import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <h1>Homepage</h1>
    <Link to="/nonexistentpage">Non existent page</Link>
  </div>
);
