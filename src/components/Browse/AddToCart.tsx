import * as propTypes from 'prop-types';
import * as React from 'react';
import { ICartItem, ICartItemWithQuantity } from '../../actions/CartActions';
import { IItemFullData } from '../../actions/StoreActions';

import {
    Button,
    Segment
} from 'semantic-ui-react';

interface IProps {
    item: IItemFullData;
    onAddClick: (item: ICartItemWithQuantity) => void;
}

class AddToCart extends React.Component<IProps, {}> {
    public static props = {
        item: propTypes.shape({
            id: propTypes.number.isRequired,
            name: propTypes.string.isRequired,
            stock: propTypes.number.isRequired,
            image: propTypes.any.isRequired,
            soldout: propTypes.bool.isRequired,
            description: propTypes.string
        }),
        onAddClick: propTypes.func.isRequired
    };
    private input: HTMLInputElement | null;
    private itemAsCartItem: ICartItem = {
        id: this.props.item.id,
        name: this.props.item.name,
        quantity: this.props.item.stock
    };
    constructor(props: IProps) {
        super(props);
    }
    public render() {
        return (
            <Segment>
                <form
                    onSubmit={
                        (e) => {
                            e.preventDefault();
                            if (!this.input) {
                                return;
                            }
                            this.props.onAddClick({
                                item: this.itemAsCartItem,
                                amount: this.input.valueAsNumber
                            });
                        }
                    }>
                    <input
                        type='number'
                        ref={(userInput) => this.input = userInput}
                        placeholder='0'
                    />
                    <p>{this.props.item.stock} Available</p>
                    <Button
                        type='submit'
                        content='Add to cart'
                        active
                    />
                </form>
            </Segment>
        );
    }
}

export default AddToCart;
