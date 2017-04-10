import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

// if you want to pass information to a tag, you passed via a prop
class App extends React.Component {
  render() {
    return (
      <div className="row">
        <Header tagline="Fresh Meat & Cold Beer" />
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;
