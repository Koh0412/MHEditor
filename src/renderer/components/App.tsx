import React from 'react';
import Editor from './Editor';
import TestComponent from './TestComponent';

function App(): JSX.Element {
  return (
    <div>
      <TestComponent name="test" />
      <Editor />
    </div>
  );
}

export default App;
