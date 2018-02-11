import * as React from 'react';
import { connect } from 'react-redux';
import {
  Card,
  Form,
} from 'semantic-ui-react';
import {
  addItemAction as dAddItemAction,
  ICartItem,
  TAddItemAction
} from '../actions/CartActions';
import {
  IItemFullData
} from '../actions/StoreActions';
import { IAppState } from '../reducers';

import MyModal from '../components/MyModal';

interface IStateProps {
  usersCart: ICartItem[];
  availableStock: number;
}

interface IDispatchProps {
  addItemAction: TAddItemAction;
}

interface IProps {
  item: IItemFullData;
}

interface IState {
  openError: boolean;
  openSuccess: boolean;
}

class AddToCart extends React.Component<IProps & IDispatchProps & IStateProps, IState> {
  private amountToAdd: HTMLInputElement | null;
  private amountAdded: number;
  constructor(props: IProps & IDispatchProps & IStateProps) {
    super(props);
    this.state = {
      openError: false,
      openSuccess: false
    };
  }

  public render() {
    return (
      <div>
        <MyModal
        open={this.state.openError}
        handleClose={this.handleCloseError}
        content={`You entered an invalid amount of ${this.props.item.name} for your order!`}
        />
        <MyModal
        open={this.state.openSuccess}
        handleClose={this.handleCloseSuccess}
        content={`You just added ${this.amountAdded} ${this.props.item.name} to your shopping cart!`}
        />
        <Card
          className='addtocart'>
          <Card.Content>
            <Card.Header>
              {this.props.item.name}
            </Card.Header>
            <Card.Meta>
              {`${this.props.availableStock} remaining!`}
            </Card.Meta>
            <Card.Description>
              {this.props.item.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Form>
              <Form.Group>
                <input
                  type='number'
                  defaultValue='0'
                  placeholder='0'
                  min={0}
                  ref={(ref: any) => this.amountToAdd = ref}
                />
                <Form.Button
                  content='Add To Cart!'
                  onClick={(e) => {
                    e.preventDefault();
                    this.checkAndAddItem();
                  }} />
              </Form.Group>
            </Form>
          </Card.Content>
        </Card>
      </div>
    );
  }

  // Checks if user entered a valid amount, and then adds item to cart
  private checkAndAddItem = () => {
    this.resolveAmount();
    if (this.props.availableStock < this.amountAdded || this.amountAdded <= 0) {
      this.handleOpenError();
      return;
    }
    this.props.addItemAction(this.convertToCartItem());
    this.handleOpenSuccess();
  }

  // Reads amount from input box
  private resolveAmount = () => {
    if (this.amountToAdd) {
      this.amountAdded = this.amountToAdd.valueAsNumber;
      if (isNaN(this.amountAdded)) {
          this.amountAdded = 0;
        }
    } else {
      this.amountAdded = 0;
    }
  }

  // Type conversion of store item to cart item
  private convertToCartItem = (): ICartItem => {
    return ({
      item: this.props.item,
      amount: this.amountAdded
    });
  }

  private handleCloseSuccess = () => this.setState({ openSuccess: false });
  private handleOpenSuccess = () => this.setState({ openSuccess: true });
  private handleCloseError = () => this.setState({ openError: false });
  private handleOpenError = () => this.setState({ openError: true });

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
