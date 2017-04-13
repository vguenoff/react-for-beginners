import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

// if you want to pass information to a tag, you passed via a prop
class App extends React.Component {
  constructor() {
    super();
    // we cannot use the keyword 'this' until we call super() because the React.Component that we're extending needs to be initialized
    this.addFish = this.addFish.bind(this);
    // get initial state
    this.state = {
      fishes: {},
      order: {}
    };
  }
  addFish(fish) {
    // update the state
    // first take a copy of the state ...spread operator is used to take a copy of the existing state
    // this is for performance reasons
    const fishes = { ...this.state.fishes };
    // milliseconds since January 1970 :)
    const timestamp = Date.now();
    // add in our new fish
    fishes[`fish-${timestamp}`] = fish;
    // set state
    // this.setState({ fishes: fishes });
    this.setState({ fishes });
  }
  render() {
    return (
      <div className="row">
        <Header tagline="Fresh Seafood Market" />
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
