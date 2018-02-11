import * as React from 'react';

import {
  Container,
  Divider,
  Header,
  Segment
} from 'semantic-ui-react';

import ItemSummary from '../../containers/Checkout/ItemSummary';
import Payment from './Payment';

class Checkout extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <Segment
        vertical
        style={{ paddingTop: '5%' }}
      >
        <Container>
          <Header
            content='Checkout'
            size='large'
          />
          <Divider />
          <ItemSummary />
          <Divider />
          <Payment />
        </Container>
      </Segment>
    );
  }
}

export default Checkout;
