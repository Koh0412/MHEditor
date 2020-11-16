import React from 'react';
import Editor from './Editor';
import TestComponent from './TestComponent';

class App extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div>
        <TestComponent name="test" />
        <Editor />
      </div>
    );
  }
}

export default App;
