import React from 'react';
import Editor from './Editor';

class App extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div>
        <Editor />
      </div>
    );
  }
}

export default App;
