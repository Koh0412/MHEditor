import React from 'react';
import { IPosition } from 'monaco-editor';
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
        position: { column: 0, lineNumber: 0 }
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
    this.setState({
      editor: {
        position: editorModule.instance?.getPosition() as IPosition
      }
    });

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
