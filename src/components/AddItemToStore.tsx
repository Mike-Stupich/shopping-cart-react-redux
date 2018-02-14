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
  getItems as dGetItems,
  IItemFullData,
  incrementIndex as dIncrementIndex,
  TAddStoreItem,
  TGetItems,
  TIncrementIndex
} from '../actions/StoreActions';
import { IAppState } from '../reducers';

interface DispatchProps {
  addStoreItem: TAddStoreItem;
  incrementIndex: TIncrementIndex;
  getItems: TGetItems;
}

interface StateProps {
  itemIndex: number;
  store: IItemFullData[];
}


class AddItemToStore extends React.Component<DispatchProps & StateProps> {
  private name: HTMLInputElement | null;
  private description: HTMLInputElement | null;
  private image: HTMLInputElement | null;
  private stock: HTMLInputElement | null;
  constructor(props: DispatchProps & StateProps) {
    super(props);
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
                <input type='text' required ref={(ref: any) => this.name = ref}
                placeholder='Item Name'/>
              </Form.Field>
              <Form.Field width={7}>
                <Label pointing='below' content='Please enter an image url' />
                <input type='text' required ref={(ref: any) => this.image = ref}
                placeholder='https://'/>
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field width={10}>
                <Label pointing='below' content='Please enter an item description' />
                <textarea ref={(ref: any) => this.description = ref}
                placeholder='Beautiful Blue Bucket...'/>
              </Form.Field>
              <Form.Field width={4}>
                <Label pointing='below' content='Please enter the stock of the item' />
                <input type='number' required ref={(ref: any) => this.stock = ref}
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
    const item = {
      id: this.props.itemIndex,
      name: this.name!.value,
      description: this.description!.value,
      image: this.image!.value,
      stock: this.stock!.valueAsNumber,
      soldout: false
    };
    this.props.incrementIndex();
    this.props.addStoreItem(item);
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    itemIndex: state.modifyStore.itemIndex,
    store: state.modifyStore.localStock,
  };
};

export default connect(mapStateToProps, {
  addStoreItem: dAddStoreItem,
  incrementIndex: dIncrementIndex,
  getItems: dGetItems,
})(AddItemToStore);

