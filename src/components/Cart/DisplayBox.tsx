import * as propTypes from "prop-types";
import * as React from 'react';

import {
    Button,
    Item,
    Segment
} from 'semantic-ui-react';

import { ICartItem } from '../../actions/CartActions';

interface IProps {
    cartItem: ICartItem;
    modifyCartAmount: (payload: ICartItem) => void;
    showModal: () => void;
}

interface IState {
    visibleButton: boolean;
    modalOpen: boolean;
}

class DisplayBox extends React.Component<IProps, IState> {
    public static props = {
        cartItem: propTypes.shape({
            item: propTypes.shape({
                id: propTypes.number.isRequired,
                name: propTypes.string.isRequired,
                quantity: propTypes.number.isRequired,
            }).isRequired,
            amount: propTypes.number.isRequired
        }).isRequired,
        modifyCartAmount: propTypes.func.isRequired,
        showModal: propTypes.func.isRequired,
    };
    private input: HTMLInputElement | null;
    constructor(props: IProps) {
        super(props);
        this.state = {
            visibleButton: false,
            modalOpen: false
        };
    }
    public render() {
        return (
            <Segment>
                {/* Put detailed view here */}
                <Item className='item-display'>
                    <Item.Image
                        src={require(`../../assets/${this.props.cartItem.item.id}.jpg`)}
                        size='large'
                        centered
                    />
                    <div>
                        <Item.Header>
                            {this.props.cartItem.item.name}
                            <input
                                type='number'
                                max={this.props.cartItem.item.stock}
                                min={0}
                                ref={(ref) => this.input = ref}
                                onChange={this.showSavebutton}
                                placeholder={`${this.props.cartItem.amount}`}
                            />
                        </Item.Header>
                    </div>
                    {this.state.visibleButton ? <this.SaveButton /> : null}
                </Item>
            </Segment>
        );
    }

    private SaveButton = () => (
        <Button
            content='Save Changes'
            onClick={
                (e) => {
                    if (!this.input) {
                        return;
                    }
                    this.props.modifyCartAmount(this.props.cartItem);
                    this.props.showModal();
                }
            }
        />
    )

    private showSavebutton = () => {
        this.setState({
            visibleButton: true
        });
    }
}

export default DisplayBox;
