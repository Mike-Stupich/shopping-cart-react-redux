import * as React from 'react';
import { connect } from 'react-redux';
import {
  Header,
  Image,
  Modal,
} from 'semantic-ui-react';
import {
  addItemAction as dAddItemAction,
  ICartItem,
  setCartAmountAction as dSetCartAmountAction,
  TAddItemAction,
  TSetCartAmountAction
} from '../actions/CartActions';
import {
  IItemFullData,
  IModal
} from '../actions/StoreActions';
import { IAppState } from '../reducers';

interface IProps {
  selectedItem: IItemFullData;
}

interface IDispatchProps {
  addItemAction: TAddItemAction;
  setCartAmountAction: TSetCartAmountAction;
}

interface IStateProps {
  modalInfo: IModal;
  userCartInfo: ICartItem[];
}
class ConnectedItemModal extends React.Component<IDispatchProps & IStateProps> {
  public constructor(props: IProps & IDispatchProps & IStateProps) {
    super(props);
  }

  public render() {
    return (
      <Modal
        open={this.props.modalInfo.visibility}
        onClose={this.close}
      >
        <Modal.Header>More Details</Modal.Header>
        <Modal.Content image>
          <Image
            size='medium'
            src={require(`../assets/${this.props.modalInfo.item.id}.jpg`)}
          />
          <Modal.Description>
            <Header>{this.props.modalInfo.item.name}</Header>
            <p>{this.props.modalInfo.item.description}</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
  private close = () => this.setState({ modalVisible: false });
}

const mapStateToProps = (state: IAppState): IStateProps => {
  return {
    userCartInfo: state.modifyCart.cart,
    modalInfo: state.modifyStore.modal!
  };
};

export default connect(mapStateToProps, {
  addItemAction: dAddItemAction,
  setCartAmountAction: dSetCartAmountAction
})(ConnectedItemModal);
