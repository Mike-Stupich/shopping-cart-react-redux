import * as React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Container,
  Divider,
  Form,
  Header,
  Label,
  Segment
} from 'semantic-ui-react';
import {
  addStoreItem as dAddStoreItem,
  IItemFullData,
  IItemFullDataWithTx,
  incrementIndex as dIncrementIndex,
  TAddStoreItem,
  TIncrementIndex
} from '../actions/StoreActions';
import { IAppState } from '../reducers';

interface DispatchProps {
  addStoreItem: TAddStoreItem;
  incrementIndex: TIncrementIndex;
}

interface StateProps {
  itemIndex: number;
  store: IItemFullDataWithTx[];
}


class AddItemToStore extends React.Component<DispatchProps & StateProps> {
  private item: IItemFullData;
  constructor(props: DispatchProps & StateProps) {
    super(props);
    this.item = {
      id: 1,
      name: '',
      description: '',
      image: '',
      stock: 1,
      soldout: false
    };
  }
  public render(): JSX.Element {
    return (
      <Segment vertical style={{ paddingTop: '5%' }}>
        <Container>
          <Header
            content='Add New Item To Store'
            size='large'
          />
          <Divider />
          <Form>
            <Form.Group>
              <Form.Field width={7}>
                <Label pointing='below' content='Please enter an item name' />
                <input type='text' required ref={(ref: any) => this.item.name = ref}
                placeholder='Item Name'/>
              </Form.Field>
              <Form.Field width={7}>
                <Label pointing='below' content='Please enter an image url' />
                <input type='text' required ref={(ref: any) => this.item.image = ref}
                placeholder='https://'/>
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field width={10}>
                <Label pointing='below' content='Please enter an item description' />
                <textarea ref={(ref: any) => this.item.image = ref}
                placeholder='Beautiful Blue Bucket...'/>
              </Form.Field>
              <Form.Field width={4}>
                <Label pointing='below' content='Please enter the stock of the item' />
                <input type='number' required ref={(ref: any) => this.item.image = ref}
                placeholder='10'/>
                <Button type='submit' onClick={(e) => this.addCurrItem()} content='Add New Item'/>
              </Form.Field>
            </Form.Group>
          </Form>
        </Container>
      </Segment>
    );
  }

  private addCurrItem = () => {
    this.props.incrementIndex();
    this.item.id = this.props.itemIndex;
    this.props.addStoreItem(this.item);
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    itemIndex: state.modifyStore.itemIndex,
    store: state.modifyStore.stock,
  };
};

export default connect(mapStateToProps, {
  addStoreItem: dAddStoreItem,
  incrementIndex: dIncrementIndex
})(AddItemToStore);

