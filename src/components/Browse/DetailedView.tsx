import * as React from 'react';
import {
  Button,
  Form,
  Header,
  Image,
  Modal,
} from 'semantic-ui-react';
import { IItemFullData } from '../../actions/StoreActions';

interface IProps {
  item: IItemFullData;
  handleClose: () => void;
  open: boolean;
  addItemToCart: (item: IItemFullData, amount: number) => void;
}

class DetailedView extends React.Component<IProps> {
  public input: HTMLInputElement | null;
  constructor(props: IProps) {
    super(props);
  }
  public render(): JSX.Element {
    return (
      <Modal
        size='small'
        open={this.props.open}
        onClose={this.props.handleClose}
      >
        <Modal.Header>
          {`${this.props.item.name}`}
        </Modal.Header>
        <Modal.Content image>
          <Image
            wrapped
            size='medium'
            src={this.props.item.image}
          />
          <Modal.Description>
            <Header>{this.props.item.name}</Header>
            <p>{this.props.item.description}</p>
          </Modal.Description>
          <Form>
            <Form.Group>
              <input required type='number' placeholder='1' defaultValue='1' ref={(ref: any) => this.input = ref} />
              <Form.Button content='Add To Cart' onClick={
                (e) => {
                  e.preventDefault();
                  const inputVal = this.input ? this.input.valueAsNumber : 1;
                  this.props.addItemToCart(this.props.item, inputVal);
                }
              } />
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={this.props.handleClose}
          >OK</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default DetailedView;
