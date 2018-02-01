import * as React from 'react';
import { connect } from 'react-redux';

interface IProps {}

interface IState {}

class InStockItems extends React.Component<IProps, IState> {
    public render() {
        return (<span>ComponentName</span>);
    }
}

export default connect()(InStockItems);
