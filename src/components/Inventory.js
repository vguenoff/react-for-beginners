import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render() {
    return (
      <div className="Inventory">
        <h2>Inventory</h2>
        <hr />
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSemples} className="btn btn-y">Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;
