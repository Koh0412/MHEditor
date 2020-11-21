import React from 'react';
import ReactModal from 'react-modal';

interface DialogProps {
  isOpen: boolean;
  close: () => void;
}

class BaseDialog extends React.Component<DialogProps> {
  constructor(props: DialogProps) {
    super(props);
    ReactModal.setAppElement('#app');
  }

  private get style(): ReactModal.Styles {
    const style: ReactModal.Styles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        border: 'none',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '35%',
        height: '35%',
        backgroundColor: 'rgb(37, 40, 45)'
      },
      overlay: {
        background: 'rgba(0, 0, 0, 0.2)'
      }
    }
    return style
  }

  render() {
    return (
      <ReactModal
        isOpen={this.props.isOpen}
        onRequestClose={() => this.props.close()}
        style={this.style}
      >{this.props.children}</ReactModal>
    )
  }

}

export default BaseDialog;
