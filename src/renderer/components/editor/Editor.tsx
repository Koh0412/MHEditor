import React from 'react';

class Editor extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className="editor">
        <div id="editable" className="context"></div>
      </div>
    );
  }
}

export default Editor;
