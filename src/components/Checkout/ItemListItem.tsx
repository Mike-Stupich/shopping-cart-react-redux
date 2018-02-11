import * as React from 'react';
import { Form, Grid, Header, Icon, Image } from 'semantic-ui-react';
import { ICartItem } from "../../actions/CartActions";

interface IProps {
  open: () => void;
  cartItem: ICartItem;
  removeItem: (payload: ICartItem) => void;
  setAmount: (payload: ICartItem) => void;
}

class ItemListItem extends React.Component<IProps> {
  private input: HTMLInputElement | null;
  public render(): JSX.Element {
    return (
      <Grid.Row>
        <Grid.Column width={2}>
          <Image
            className='.list-image'
            src={this.props.cartItem.item.image}
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Header>{this.props.cartItem.item.name}</Header>
          <p>{this.props.cartItem.item.description}</p>
        </Grid.Column>
        <Grid.Column width={3}>
          <Form action='submit'>
            <Form.Group>
                <Header
                content={`In cart: `}
                />
                <input
                type='number'
                defaultValue={`${this.props.cartItem.amount}`}
                ref={(ref: any) => this.input  = ref}
                max={this.props.cartItem.item.stock}
                min={0}
                />
                <Icon
                name='cancel'
                color='red'
                size='large'
                className='cancel'
                onClick={this.removeItem}/>
            </Form.Group>
            <Form.Button className='form-button' content='Save Changes'
            onClick={(e) => {
              e.preventDefault();
              this.setAmount();
            }}
            />
          </Form>
        </Grid.Column>
      </Grid.Row>
    );
  }

  private removeItem = () => {
    this.props.removeItem(this.props.cartItem);
  }

  private setAmount = () => {
    if (this.input) {
      if (this.input.valueAsNumber !== this.props.cartItem.amount && !isNaN(this.input.valueAsNumber)) {
        this.props.setAmount({
          item: this.props.cartItem.item,
          amount: this.input.valueAsNumber
        });
      }
    }
  }
}

export default ItemListItem;
