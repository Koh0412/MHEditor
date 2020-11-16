import React from 'react';
import { editorModule } from '../modules/EditorModule';
import Editor from './Editor';
import TestComponent from './TestComponent';

addEventListener('DOMContentLoaded', () => editorModule.boot(), false);

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
