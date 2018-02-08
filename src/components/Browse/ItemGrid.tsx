import * as propTypes from 'prop-types';
import * as React from 'react';
import {
    Grid,
    Segment,
} from 'semantic-ui-react';

import { ICartItemWithQuantity } from '../../actions/CartActions/';
import { IItemWithQuantity } from '../../actions/StoreActions';
import { IDispatchProps, IStateProps } from '../../containers/ConnectedCards';
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
                                if (item.soldout) {
                                    return null;
                                }
                                return (
                                    <Grid.Column
                                        width={4}
                                        key={item.id}>
                                        <ItemCard
                                            key={item.id}
                                            item={item}
                                            onItemClick={
                                                (i: ICartItemWithQuantity) => {
                                                    const decStock: IItemWithQuantity = {
                                                        id: i.item.id, amount: i.amount
                                                    };
                                                    this.props.addItemAction(i);
                                                    this.props.decreaseStockAction(decStock);
                                                }
                                            }
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
