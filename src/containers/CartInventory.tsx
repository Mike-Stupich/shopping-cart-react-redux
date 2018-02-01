import * as React from 'react';
import { connect } from 'react-redux';
// import ItemGrid from '../components/ItemGrid';

interface IProps {

}

interface IState {

}

class CartInventory extends React.Component<IProps, IState> {
    public render(): JSX.Element {
        return (<span>ComponentName</span>);
    }
}

// const mapStateToProps = (state) => {

// }

// const mapDispatchToProps = (dispatch) => {

// }

export default connect()(CartInventory);
