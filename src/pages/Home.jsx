import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <h1>Homepage</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eos quasi, facilis ipsam
      impedit qui iusto inventore pariatur similique fuga eius dolore dolor! Quam blanditiis,
      expedita impedit reprehenderit ipsum nemo officiis optio similique aspernatur iusto officia
      et? Blanditiis, harum culpa.
    </p>
    <Link to="/nonexistentpage">Non existent page</Link>
  </div>
);
