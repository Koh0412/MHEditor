import React from 'react';
import Editor from './editor/Editor';
import FileTree from './tree/FileTree';
import Tool from './tools/Tool';

class App extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <main>
        <Tool />
        <div>
          <FileTree />
          <Editor />
        </div>
      </main>
    );
  }
}

export default App;
