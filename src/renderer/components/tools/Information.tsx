import React from 'react';
import { editorModule } from '../../modules/EditorModule';
import { IEditorInfo } from '../../types';

interface InfoState {
  editor: IEditorInfo;
}

class Information extends React.Component<{}, InfoState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      editor: {
        position: { column: 1, lineNumber: 1 }
      }
    };
  }

  /**
   * エディタのカーソルの位置
   */
  get position() {
    return this.state.editor.position;
  }

  componentDidMount() {
    editorModule.onChangeCursorPosition((e) => {
      const editor: IEditorInfo = { position: e.position };
      this.setState({ editor });
    });
  }

  render(): JSX.Element {
    return (
      <div>Col: {this.position.column}, Ln: {this.position.lineNumber}</div>
    );
  }
}

export default Information;
