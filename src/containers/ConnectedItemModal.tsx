import * as React from 'react';
import { connect } from 'react-redux';
// import { NumberPicker } from 'react-widgets';
import {
  Header,
  Image,
  Modal,
} from 'semantic-ui-react';
import {
  addItemAction as dAddItemAction,
  ICartItemWithQuantity,
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
  userCartInfo: ICartItemWithQuantity[];
}
class ConnectedItemModal extends React.Component<IDispatchProps & IStateProps> {
  // private amountInCart: number;
  public constructor(props: IProps & IDispatchProps & IStateProps) {
    super(props);
    // this.amountInCart = this.findAmountInCart(this.props.modalInfo.item);
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
          {/* <NumberPicker
            max={this.props.modalInfo.item.stock}
            min={0}
            defaultValue={this.amountInCart}
          /> */}
        </Modal.Content>
      </Modal>
    );
  }
  private close = () => this.setState({ modalVisible: false });
  private findAmountInCart = (item: IItemFullData): number => {
    console.log('Amount in Cart', this.findAmountInCart);
    const checkCart = this.props.userCartInfo.find((cartItem) => (item.id === cartItem.item.id));
    if (!checkCart) {
      return 0;
    }
    return checkCart.amount;
  }

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
