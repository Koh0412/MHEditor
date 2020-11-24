import React from 'react';
import SelectLang from './actions/SelectLang';

interface SettingState {
  actionItems: JSX.Element[];
}

class Setting extends React.Component<{}, SettingState> {
  components: typeof React.Component[];

  constructor(props: {}) {
    super(props);
    this.components = [SelectLang];

    this.state = {
      actionItems: this.components.map((Component, i) => <Component key={i} />)
    };
  }

  render(): JSX.Element {
    return (
      <div className="setting">{this.state.actionItems}</div>
    );
  }
}

export default Setting;
