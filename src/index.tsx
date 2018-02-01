import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import { store } from './store';

import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/' component={App} />
      {/*
      <Router path='/register' component={Register} />
      <Router path='/login' component={Login} />
      <Router path='/browse' component={Browse} />
      <Router path='/cart' component={Cart} />
      <Router path='/checkout' component={Checkout} />
      <Router path='/item?' component={ItemView} />
    */}
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
