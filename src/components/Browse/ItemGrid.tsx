import * as propTypes from 'prop-types';
import * as React from 'react';
import { Container, Divider, Grid, Header, Segment, } from 'semantic-ui-react';

import { ICartItem } from '../../actions/CartActions';
import { IItemFullData, IItemFullDataWithTx } from '../../actions/StoreActions';
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
        <Container>
        <Header
            content='Browse'
            size='large'
          />
          <Divider/>
          <Grid stretched>
            {this.buildGrid(this.props.items)}
          </Grid>
        </Container>
      </Segment>
    );
  }

  // Dirtiest thing I've done in a while... I'll fix this when I'm being less stupid
  private buildGrid = (items: IItemFullDataWithTx[]) => {
    if (!items) {
      return null;
    }
    const gridItems = items.map((item, index) => {
      const { storeItem } = item;
      if (storeItem.soldout) {
        return null;
      }
      return (this.ItemColumn(storeItem));
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
    console.log('ItemGrid');
    if (isNaN(amount)) {
      amount = 1;
    }
    const cartItem: ICartItem = ({
      item,
      amount
    });
    this.props.addItemAction(cartItem);
  }
}

export default ItemGrid;
