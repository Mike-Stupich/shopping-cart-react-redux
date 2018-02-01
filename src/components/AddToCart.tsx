import * as propTypes from 'prop-types';
import * as React from 'react';
import { IStoreItem } from '../actions/StoreActions';

import {
    Button,
    Segment
} from 'semantic-ui-react';

interface IProps {
    item: IStoreItem;
}

class AddToCart extends React.Component<IProps, {}> {
    public static props = {
        item: propTypes.shape({
            id: propTypes.number.isRequired,
            name: propTypes.string.isRequired,
            stock: propTypes.number.isRequired,
            image: propTypes.any.isRequired,
            soldout: propTypes.bool.isRequired,
        })
    };
    private input: HTMLInputElement;
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

                        }
                    }>
                    <input
                        type='text'
                        ref={(userInput: HTMLInputElement) => {
                            this.input = userInput;
                        }}
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
