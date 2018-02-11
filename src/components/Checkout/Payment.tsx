import * as React from 'react';
import { connect } from 'react-redux';

import { Header } from "semantic-ui-react";

interface IProps {

}

interface IState {

}

class Payment extends React.Component<IProps, IState> {
  public render(): JSX.Element {
    return (
      <Header
      content={'Payment'}
      />
    );
  }
}

export default connect(
  (state) => ({
    // Map state to props
  }),
  {
    // Map dispatch to props
  })(Payment);
