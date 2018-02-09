import * as React from 'react';
import {
  Header,
  Image,
  Modal,
} from 'semantic-ui-react';
import {
  IItemFullData
} from '../../actions/StoreActions';

interface IProps {
    item: IItemFullData;
    amount: number;
    showFunc: () => any;
}

interface IState {
    modalVisible: boolean;
}

class ItemModal extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }
    public render() {
        return (
            <Modal
              // open={this.props.showFunc}
              // onClose={this.props.closeFunc}
            >
              <Modal.Header>More Details</Modal.Header>
              <Modal.Content image>
                <Image
                  size='medium'
                  src={require(`../assets/${this.props.item.id}.jpg`)}
                />
                <Modal.Description>
                  <Header>{this.props.item.name}</Header>
                  <p>{this.props.item.description}</p>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          );
    }
}

export default ItemModal;
