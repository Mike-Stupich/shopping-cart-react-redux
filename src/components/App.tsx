import * as React from 'react';

import BrowseItems from './Browse/BrowseItems';

class App extends React.Component {
  public render() {
    return (
      <div>
        {/* Add isAuthenticated to navbar to show Register/Login */}
        {/* <SearchBar /> */}
        <BrowseItems />
      </div>
    );
  }
}

export default App;
