import React from 'react';
import { editorModule } from '../modules/EditorModule';

addEventListener('DOMContentLoaded', () => editorModule.boot(), false);

class Editor extends React.Component {
  render(): JSX.Element {
    const styles: React.CSSProperties | undefined = {
      width: '100%',
      height: '500px',
      border: '1px solid grey',
    };

    return (
      <>
        <div id="editable" style={styles}></div>
      </>
    );
  }
}

export default Editor;
