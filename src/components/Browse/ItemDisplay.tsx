import * as React from 'react';
import {
  Item,
  Segment
} from 'semantic-ui-react';
import { IItemFullData } from '../../actions/StoreActions';
import AddToCart from '../../containers/AddToCart';
interface IProps {
  storeItem: IItemFullData;
}

interface IState {
  modalOpen: boolean;
}

class ItemDisplay extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }

  public render() {
    return (
        <Segment>
            <Item className='item-display'>
                <Item.Image
                    className='item-display-image'
                    src={require(`../../assets/${this.props.storeItem.id}.jpg`)}
                    size='large'
                    centered
                />
                <AddToCart item={this.props.storeItem}/>
            </Item>
        </Segment>
    );
  }
}

export default ItemDisplay;
