import React from 'react';
import { editorModule } from '../../modules/EditorModule';

class ModuleLoader extends React.Component {
  componentDidMount() {
    editorModule.boot();
  }

  render() {
    return <></>;
  }
}

export default ModuleLoader;
