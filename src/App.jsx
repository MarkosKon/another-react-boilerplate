import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'fuck you',
    };
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <h1>
          A message follows:
          {name}
        </h1>
      </div>
    );
  }
}

export default App;
