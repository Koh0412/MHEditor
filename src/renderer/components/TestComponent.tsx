import React from 'react';

interface Props {
  name: string;
}

interface State {
  point: number;
}

class TestComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      point: 0,
    };
  }

  onClick(): void {
    let p = this.state.point;
    p++;
    this.setState({ point: p });
  }

  render(): JSX.Element {
    return (
      <div>
        <li>{this.props.name}</li>
        <li>{this.state.point}</li>
        <button onClick={() => this.onClick()}>click!</button>
      </div>
    );
  }
}

export default TestComponent;
