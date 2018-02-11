import * as React from 'react';
import {
    Grid,
    Segment
} from 'semantic-ui-react';
import { ICartItem } from '../../actions/CartActions';
import { IDispatchProps, IStateProps } from '../../containers/ConnectedCartDisplay';
import MyModal from '../MyModal';
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
                <MyModal
                open={this.state.open}
                handleClose={this.close}
                content={'Your changes have been saved!'}
                />
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
                                        modifyCartAmount={(payload: ICartItem) => {
                                            this.props.setCartAmountAction(payload);
                                        }}
                                        showModal={this.show}
                                    />
                                </Grid.Column>
                            );
                            if (i.item.stock === 0) {
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
}
