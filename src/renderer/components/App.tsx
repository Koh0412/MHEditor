import React from 'react';
import Tool from './tools/Tool';
import Editor from './editor/Editor';
import FileTree from './tree/FileTree';
import ModuleLoader from './parts/ModuleLoader';

class App extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <>
        <ModuleLoader />
        <main>
          <div className="container">
            <FileTree />
            <Editor />
          </div>
          <Tool />
        </main>
      </>
    );
  }
}

export default App;
