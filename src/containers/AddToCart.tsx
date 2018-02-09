import * as React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Card,
  Modal,
} from 'semantic-ui-react';
import {
  addItemAction as dAddItemAction,
  ICartItemWithQuantity,
  TAddItemAction
} from '../actions/CartActions';
import {
  IItemFullData
} from '../actions/StoreActions';
import { IAppState } from '../reducers';

interface IProps {
  item: IItemFullData;
}

interface IState {
  open: boolean;
}

interface IStateProps {
  usersCart: ICartItemWithQuantity[];
  availableStock: number;
}

interface IDispatchProps {
  addItemAction: TAddItemAction;
}

class AddToCart extends React.Component<IProps & IDispatchProps & IStateProps, IState> {
  private amountToAdd: HTMLInputElement | null;
  private amountAdded: number;
  constructor(props: IProps & IDispatchProps & IStateProps) {
    super(props);
    this.state = {
      open: false
    };
  }

  public render() {
    return (
      <div>
      <this.ConfirmationModal/>
      <Card
      className='addtocart'>
        <Card.Content>
          <Card.Header>
            {this.props.item.name}
          </Card.Header>
          <Card.Meta>
            {this.props.availableStock} remaining!
          </Card.Meta>
          <Card.Description>
            {this.props.item.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='addtocart-div'>
            <Button
              type='submit'
              active
              onClick={(e) => {
                e.preventDefault();
                this.props.addItemAction(this.convertToCartItem());
                this.handleOpen();
              }}
            >Add To Cart</Button>
            <input
              className='addtocart-input'
              type='number'
              min={0}
              max={this.props.availableStock}
              placeholder='0'
              defaultValue='0'
              ref={(input) => this.amountToAdd = input}
            />
          </div>
        </Card.Content>
      </Card>
      </div>
    );
  }

  private ConfirmationModal = () => (
    <Modal
    size='small'
    open={this.state.open}
    onClose={this.handleClose}
    >
    <Modal.Header>{`You just added
    ${this.amountAdded}
    ${this.props.item.name} to your shopping cart!`}</Modal.Header>
      <Modal.Actions>
        <Button
        onClick={this.handleClose}
        >OK</Button>
      </Modal.Actions>
    </Modal>
  )

  private handleClose = () => this.setState({ open: false });
  private handleOpen = () => this.setState({ open: true });

  private convertToCartItem = (): ICartItemWithQuantity => {
    if (!this.amountToAdd) {
      this.amountAdded = 0;
    } else {
      this.amountAdded = this.amountToAdd.valueAsNumber;
    }
    return({
      item: {
        id: this.props.item.id,
        name: this.props.item.name,
        quantity: this.props.item.stock,
      },
      amount: this.amountAdded
    });
  }
}

const getAvailableStock = (state: IAppState, props: IProps): number => {
  const found = state.modifyCart.cart.find((itemInCart) => (itemInCart.item.id === props.item.id));
  if (found !== undefined) {
    return (props.item.stock - found.amount);
  }
  return (props.item.stock);
};

const mapStateToProps = (state: IAppState, props: IProps) => {
  return {
    usersCart: state.modifyCart.cart,
    availableStock: getAvailableStock(state, props)
  };
};
export default connect(mapStateToProps, {
  addItemAction: dAddItemAction
})(AddToCart);
