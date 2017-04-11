import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }
  goToStore(event) {
    event.preventDefault();
    // first grab the input
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`);
    // second we're going to transition from / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`);
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        {/* ref and the arrow function are used to catch the input */}
        <input
          ref={input => this.storeInput = input}
          defaultValue={getFunName()}
          type="text"
          required
          placeholder="Fresh Seafood Market"
          className="form-control"
        />
        <button type="submit" className="btn btn-success">Visit Store</button>
      </form>
    );
  }
}

// we're making the router available to the StorePicker component through context
StorePicker.contextTypes = {
  router: React.PropTypes.object
};

export default StorePicker;
