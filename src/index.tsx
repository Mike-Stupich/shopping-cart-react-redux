import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './components/App';
import Cart from './components/Cart/MyCart';
// import Footer from './components/Footer';
import NavBar from './components/NavBar';
import store, { history} from './store';

import 'semantic-ui-css/semantic.min.css';
require('./containers/stylesheet.css');
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
      <NavBar />
        <Route exact path='/' component={App} />
        <Route exact path='/browse' component={App} />
        {/* <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/browse' component={Browse} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/item?' component={ItemView} /> */}
        <Route path='/cart' component={Cart} />
        {/* <Footer /> */}
        </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
