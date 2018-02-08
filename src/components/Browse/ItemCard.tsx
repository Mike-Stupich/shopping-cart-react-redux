import * as propTypes from 'prop-types';
import * as React from 'react';
import {
    Card,
    Image,
} from 'semantic-ui-react';
import { IItemFullData } from '../../actions/StoreActions';
import AddToCart from './AddToCart';

interface IProps {
    item: IItemFullData;
    onItemClick: any;
}

class ItemCard extends React.Component<IProps, {}> {
    public static props = {
        item: propTypes.shape({
            id: propTypes.number.isRequired,
            name: propTypes.string.isRequired,
            stock: propTypes.number.isRequired,
            image: propTypes.any.isRequired,
            soldout: propTypes.bool.isRequired,
            description: propTypes.string,
        }).isRequired,
    };
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <Card
            >
                <Image
                    src={this.props.item.image}
                     />
                <Card.Content>
                    <Card.Header>
                        {this.props.item.name}
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <AddToCart
                    onAddClick={this.props.onItemClick}
                    item={this.props.item}
                    />
                </Card.Content>
            </Card>
        );
    }
}

export default ItemCard;
