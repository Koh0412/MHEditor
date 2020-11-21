import React from 'react';
import Information from './Information';
import Setting from './Setting';

class Tool extends React.Component {
  render(): JSX.Element {
    return (
      <div className="tools">
        <Information />
        <Setting />
      </div>
    );
  }
}

export default Tool;
