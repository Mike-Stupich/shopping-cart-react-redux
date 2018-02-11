import * as React from 'react';
import { Button, Modal } from 'semantic-ui-react';

interface IProps {
  open: boolean;
  content: string;
  handleClose: () => void;
}

class MyModal extends React.Component<IProps> {
  public render(): JSX.Element {
    return (
      <Modal
      size='small'
      open={this.props.open}
      onClose={this.props.handleClose}
      >
      <Modal.Header>{this.props.content}</Modal.Header>
      <Modal.Actions>
        <Button
          onClick={this.props.handleClose}
          content='OK'
        />
      </Modal.Actions>
    </Modal>
    );
  }
}

export default MyModal;
