import * as React from 'react';
import {
    Grid,
    Modal,
    Segment
} from 'semantic-ui-react';
import { IItemWithQuantity } from '../../actions/CartActions';
import { IDispatchProps, IStateProps } from '../../containers/ConnectedCartDisplay';
import DisplayBox from './DisplayBox';

interface IState {
    open: boolean;
}

export default class CartDisplay extends React.Component<IDispatchProps & IStateProps, IState> {
    public constructor(props: IDispatchProps & IStateProps) {
        super(props);
        this.state = {
            open: false
        };
    }

    public render() {
        return (
            <Segment vertical style={{ paddingTop: '5%' }}>
                <this.modal />
                <Grid
                    container
                    divided='vertically'
                >
                    {
                        this.props.cartItems.map((i, index) => {
                            const ColumnElement = () => (
                                <Grid.Column
                                    width={4}
                                >
                                    <DisplayBox
                                        key={i.item.id}
                                        cartItem={i}
                                        modifyCartAmount={(payload: IItemWithQuantity) => {
                                            this.props.setCartAmountAction(payload);
                                        }}
                                        showModal={this.show}
                                    />
                                </Grid.Column>
                            );
                            if (i.item.quantity === 0) {
                                return null;
                            }
                            return (
                                <ColumnElement key={i.item.id} />
                            );
                        })
                    }
                </Grid>
            </Segment>
        );
    }

    private close = () => this.setState({ open: false });
    private show = () => this.setState({ open: true });

    private modal = () => {
        return (
            <Modal
                size='small'
                open={this.state.open}
                onClose={this.close}
            >
                <Modal.Header>Your changes have been saved!</Modal.Header>
            </Modal>
        );
    }

}
