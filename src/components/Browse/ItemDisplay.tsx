import * as React from 'react';
import {
  Item,
  Segment
} from 'semantic-ui-react';
import { IItemFullData } from '../../actions/StoreActions';
import AddToCart from '../../containers/AddToCart';
import DetailedView from '../Browse/DetailedView';

interface IProps {
  storeItem: IItemFullData;
  addItemDispatch: (item: IItemFullData, amount: number) => void;
}

interface IState {
  showModal: boolean;
  item: IItemFullData;
}

class ItemDisplay extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      showModal: false,
      item: {
        id: 820,
        name: 'Dummy Data',
        image: require('../../assets/background.jpg'),
        description: `This is Dummy Data, It should never be seen`,
        stock: 200,
        soldout: false
      }
    };
  }

  public render() {
    return (
        <Segment>
          <DetailedView
          item={this.state.item}
          handleClose={this.handleClose}
          open={this.state.showModal}
          addItemToCart={this.props.addItemDispatch}
          />
            <Item
            className='item-display'
            >
                <Item.Image
                    className='item-display-image'
                    src={require(`../../assets/${this.props.storeItem.id}.jpg`)}
                    size='large'
                    centered
                    onClick={
                      (e: any) => {
                        console.log('Item CLicked');
                        this.detailsClick(this.props.storeItem);
                        this.handleOpen();
                      }}
                />
                <AddToCart
                item={this.props.storeItem}
                />
            </Item>
        </Segment>
    );
  }

  private handleOpen = () => this.setState({showModal: true});
  private handleClose = () => this.setState({showModal: false});
  private detailsClick = (itemClicked: IItemFullData) => this.setState({item: itemClicked});

}

export default ItemDisplay;
