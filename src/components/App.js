import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import SampleFishes from '../sample-fishes';

// if you want to pass information to a tag, you passed via a prop
class App extends React.Component {
  constructor() {
    super();
    // we cannot use the keyword 'this' until we call super() because the React.Component that we're extending needs to be initialized
    this.addFish = this.addFish.bind(this);
    this.loadSemples = this.loadSemples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);

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
  loadSemples() {
    this.setState({
      fishes: SampleFishes
    });
  }
  addToOrder(key) {
    // first take a copy of the state
    const order = { ...this.state.order };
    // update or add the new number of fish ordered
    order[key] = order[key] + 1 || 1;
    // update our state
    this.setState({ order });
  }
  render() {
    return (
      <div>
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            {Object
              .keys(this.state.fishes)
              .map(key => <Fish
                addToOrder={this.addToOrder}
                key={key}
                index={key}
                details={this.state.fishes[key]}
              />)}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
        />
        <Inventory
          addFish={this.addFish}
          loadSemples={this.loadSemples}
        />
      </div>
    );
  }
}

export default App;
