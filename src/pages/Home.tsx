import React from 'react';
import { Link } from 'react-router-dom';

import { arrayToString } from '../utils/arrayToString';
import { greeter } from '../utils/greeter';

const messages = ['Hello', ' ', 'World', ' !!!'];
// const messages = ['Hello', ' ', 'World', ' !!!', 5];

const result = arrayToString(messages, { flag: true });

const message = greeter('Mark');
// const message = greeter(5);

export default () => (
  <div>
    <h1>Homepage</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eos quasi, facilis ipsam
      impedit qui iusto inventore pariatur similique fuga eius dolore dolor! Quam blanditiis,
      expedita impedit reprehenderit ipsum nemo officiis optio similique aspernatur iusto officia
      et? Blanditiis, harum culpa.
    </p>
    <p>{result}</p>
    <p>{message}</p>
    <Link to="/nonexistentpage">Non existent page</Link>
  </div>
);
