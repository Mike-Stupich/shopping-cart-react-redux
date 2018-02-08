import * as React from 'react';
import ConnectedCartDisplay from '../../containers/ConnectedCartDisplay';

class MyCart extends React.Component<{}, {}> {
    public render() {
        return (
            <ConnectedCartDisplay />
        );
    }
}

export default MyCart;
