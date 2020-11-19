import React from 'react';
import Infomation from './Infomation';
import Setting from './Setting';

class Tool extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <Setting />
        <Infomation />
      </div>
    );
  }
}

export default Tool;
