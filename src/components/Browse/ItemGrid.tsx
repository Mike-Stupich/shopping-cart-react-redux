import * as propTypes from 'prop-types';
import * as React from 'react';
import {
  Grid,
  Segment,
} from 'semantic-ui-react';

import { ICartItemWithQuantity } from '../../actions/CartActions';
import { IItemFullData } from '../../actions/StoreActions';
import { IDispatchProps, IStateProps } from '../../containers/ConnectedCards';
import ItemDisplay from './ItemDisplay';

class ItemGrid extends React.Component<IDispatchProps & IStateProps> {
  public static props = {
    items: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number.isRequired,
        name: propTypes.string.isRequired,
        image: propTypes.any.isRequired,
        quantity: propTypes.number.isRequired
      })).isRequired,
  };

  constructor(props: IDispatchProps & IStateProps) {
    super(props);
  }

  public render() {
    return (
      <Segment vertical style={{ paddingTop: '5%' }}>
        <Grid container stretched>
          {this.buildGrid(this.props.items)}
        </Grid>
      </Segment>
    );
  }

  // Dirtiest thing I've done in a while... I'll fix this when I'm being less stupid
  // Can wrap in ${}
  private buildGrid = (items: IItemFullData[]) => {
    const gridItems = items.map((item, index) => {
      if (item.soldout) {
        return null;
      }
      return (this.ItemColumn(item));
    });
    let cols: JSX.Element[] = [];
    const rows: JSX.Element[] = [];
    gridItems.map((item, index) => {
      if (item === null) {
        return;
      }
      cols.push(item);
      if (index % 4 === 3) {
        rows.push(this.injectIntoRow(cols, index));
        cols = [];
      }
    });
    return rows;
  }
  private injectIntoRow = (cols: JSX.Element[], index: number): JSX.Element => (
    <Grid.Row key={index}>
      {cols.map((col) => (col))}
    </Grid.Row>
  )


  private ItemColumn = (item: IItemFullData) => (
    <Grid.Column
      width={4}
      key={item.id}>
      <ItemDisplay
        key={item.id}
        storeItem={item}
        addItemDispatch={this.addItem}
      />
    </Grid.Column>
  )

  private addItem = (item: IItemFullData, amount: number) => {
    if (isNaN(amount)) {
      amount = 1;
    }
    const { id, name, stock } = item;
    const cartItem: ICartItemWithQuantity = ({item: {
      id,
      name,
      quantity: stock
    },
    amount});
    this.props.addItemAction(cartItem);
  }
}

export default ItemGrid;
