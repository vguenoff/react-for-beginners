import React from 'react';

class AddForm extends React.Component {
  constructor() {
    super();
    this.createFish = this.createFish.bind(this);
  }
  createFish(event) {
    event.preventDefault();
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value,
    };
    console.log(fish);
  }
  render() {
    return (
      <div className="AddForm" onSubmit={this.createFish}>
        <form className="fish-edit row form-inline">
          <input ref={input => this.name = input} type="text" className="fish-name" placeholder="Fish Name" />
          <input ref={input => this.price = input} type="text" className="fish-price" placeholder="Fish Price" />
          <select ref={input => this.status = input} type="text" className="fish-status" placeholder="Fish Status">
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
          <textarea ref={input => this.desc = input} type="text" className="fish-desc" placeholder="Fish Desc" />
          <input ref={input => this.image = input} type="text" className="fish-image" placeholder="Fish Image" />
          <button type="submit" className="btn btn-primary">+ Add Item</button>
        </form>
      </div>
    );
  }
}

export default AddForm;
