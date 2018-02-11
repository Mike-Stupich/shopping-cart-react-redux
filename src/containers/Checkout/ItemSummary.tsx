import * as React from 'react';
import { connect } from 'react-redux';

import {
  Grid,
  Header,
} from 'semantic-ui-react';
import {
  ICartItem,
  removeItemAction as dRemoveItemAction,
  setCartAmountAction as dSetCartAmount,
  TRemoveItemAction,
  TSetCartAmountAction
} from "../../actions/CartActions";
import ItemListItem from '../../components/Checkout/ItemListItem';
import MyModal from '../../components/MyModal';
import { IAppState } from '../../reducers';

interface IDispatchProps {
  removeItem: TRemoveItemAction;
  setCartAmount: TSetCartAmountAction;
}

interface IStateProps {
  cartItems: ICartItem[];
}

interface IState {
  open: boolean;
}

class ItemSummary extends React.Component<IStateProps & IDispatchProps, IState> {
  constructor(props: IStateProps & IDispatchProps) {
    super(props);
    this.state = {
      open: false
    };
  }
  public render(): JSX.Element {
    return (
      <div>
        <MyModal
          open={this.state.open}
          handleClose={this.closeModal}
          content={'Change this with a detailed view'}
        />
        <Header
        content='Review your cart'
        />
        <Grid
        className='list'
        size='large'
        relaxed
        divided
        >
          {
            this.props.cartItems.map((cartItem, index) => (
              <ItemListItem
                key={index}
                cartItem={cartItem}
                open={this.openModal}
                removeItem={this.props.removeItem}
                setAmount={this.props.setCartAmount}/>
            ))
          }
        </Grid>
      </div>
    );
  }

  private closeModal = () => this.setState({ open: false });
  private openModal = () => this.setState({ open: true });
}

const mapStateToProps = (state: IAppState): IStateProps => {
  return {
    cartItems: state.modifyCart.cart
  };
};

export default connect(
  mapStateToProps,
  {
    removeItem: dRemoveItemAction,
    setCartAmount: dSetCartAmount
  })(ItemSummary);
