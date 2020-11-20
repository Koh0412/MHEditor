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
        <div className="container">
          <FileTree />
          <Editor />
        </div>
        <Tool />
      </main>
    );
  }
}

export default App;
