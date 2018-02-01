import * as propTypes from 'prop-types';
import * as React from 'react';
import {
    Grid,
    Segment,
} from 'semantic-ui-react';

import { ICartItem } from '../actions/CartActions/';
import { IDispatchProps, IStateProps } from '../containers/ConnectedCards';
import ItemCard from './ItemCard';

class ItemGrid extends React.Component<IDispatchProps & IStateProps, {}> {
    public static props = {
        items: propTypes.arrayOf(
            propTypes.shape({
                id: propTypes.number.isRequired,
                name: propTypes.string.isRequired,
                image: propTypes.any.isRequired,
                quantity: propTypes.number.isRequired
            })).isRequired,
    };

    constructor(props: IDispatchProps & IStateProps) {
        super(props);
    }

    public render() {
        return (
            <Segment vertical style={{ paddingTop: '5%' }}>
                <Grid
                    container
                >
                    <Grid.Row
                    >
                        {
                            this.props.items.map((item, index) => {
                                return (
                                    <Grid.Column
                                        width={4}
                                        key={item.id}>
                                        <ItemCard
                                            key={item.id}
                                            item={item}
                                            onItemClick={
                                                (i: ICartItem) => (this.props.addItemAction(i))}
                                        />
                                    </Grid.Column>
                                );
                            })
                        }
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}

export default ItemGrid;
