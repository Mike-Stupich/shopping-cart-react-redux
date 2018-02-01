import * as React from 'react';

import BrowseItems from './BrowseItems';
import NavBar from './NavBar';

class App extends React.Component {
  public render() {
    return (
      <div>
        {/* Add isAuthenticated to navbar to show Register/Login */}
        <NavBar />
        {/* <SearchBar /> */}
        <BrowseItems />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
