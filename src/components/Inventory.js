import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  constructor() {
    super();
    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e, key) {
    const fish = this.props.fishes[key];
    // take a copy of that fish and update it with the new data
    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value
    };
    this.props.updateFish(key, updatedFish);
  }

  renderInventory(key) {
    const fish = this.props.fishes[key];
    return (
      <div className="fish-edit" key={key}>
        <hr />
        <input
          type="text"
          className="fish-name"
          value={fish.name}
          name="name"
          placeholder="Fish Name"
          onChange={e => this.handleChange(e, key)}
        />
        <input
          type="text"
          className="fish-price"
          value={fish.price}
          name="price"
          placeholder="Fish Price"
          onChange={e => this.handleChange(e, key)}
        />
        <select
          type="text"
          className="fish-status"
          value={fish.status}
          name="status"
          placeholder="Fish Status"
          onChange={e => this.handleChange(e, key)}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          type="text"
          className="fish-desc"
          value={fish.desc}
          name="desc"
          placeholder="Fish Desc"
          onChange={e => this.handleChange(e, key)}
        />
        <input
          type="text"
          className="fish-image"
          value={fish.image}
          name="image"
          placeholder="Fish Image"
          onChange={e => this.handleChange(e, key)}
        />
        <button className="remove-fish" onClick={() => this.props.removeFish(key)}>Remove Fish</button>
      </div>
    );
  }
  render() {
    return (
      <div className="Inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <hr />
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSemples} className="btn btn-y">Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;
