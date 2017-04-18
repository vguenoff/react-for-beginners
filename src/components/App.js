import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import SampleFishes from '../sample-fishes';
import base from '../base';

// if you want to pass information to a tag, you passed via a prop
class App extends React.Component {
  constructor() {
    super();
    // we cannot use the keyword 'this' until we call super() because the React.Component that we're extending needs to be initialized
    this.addFish = this.addFish.bind(this);
    this.loadSemples = this.loadSemples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.updateFish = this.updateFish.bind(this);
    this.removeFish = this.removeFish.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this);

    // get initial state
    this.state = {
      fishes: {},
      order: {}
    };
  }

  componentWillMount() {
    // this runs right before app is rendered
    this.ref = base.syncState(
      `${this.props.params.storeId}/fishes`,
      {
        context: this,
        state: 'fishes'
      }
    );

    // check if there is any order in localStorage
    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);
    if (localStorageRef) {
      // update our App component's order state
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }
  }


  componentWillUpdate(nextProps, nextState) {
    // only strings can be passed into the localStorage
    localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
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
  updateFish(key, updateFish) {
    const fishes = { ...this.state.fishes };
    fishes[key] = updateFish;
    this.setState({ fishes });
  }
  removeFish(key) {
    const fishes = { ...this.state.fishes };
    // delete fishes[key]; // doesn't work with firebase
    fishes[key] = null;
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
  removeFromOrder(key) {
    const order = { ...this.state.order };
    // console.log(order[key]);
    delete order[key];
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
          params={this.props.params}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          loadSemples={this.loadSemples}
          fishes={this.state.fishes}
          updateFish={this.updateFish}
          removeFish={this.removeFish}
        />
      </div>
    );
  }
}

export default App;
