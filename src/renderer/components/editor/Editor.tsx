import React from 'react';
import { editorModule } from '../../modules/EditorModule';

addEventListener('DOMContentLoaded', () => editorModule.boot(), false);

class Editor extends React.Component {
  render(): JSX.Element {
    return (
      <div className="editor">
        <div id="editable" className="context"></div>
      </div>
    );
  }
}

export default Editor;
