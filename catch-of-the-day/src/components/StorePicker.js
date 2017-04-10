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
    console.log(`Going to ${this.storeInput.value}`);
    // second we're going to transition from / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`);
  }
  render() {
    return (
      // example jsx comment
      <form className="store-selector" onSubmit={this.goToStore}>
        {/* example jsx comment */}
        <h2>Please Enter A Store</h2>
        <input
          ref={input => this.storeInput = input}
          defaultValue={getFunName()}
          type="text"
          required
          placeholder="Fresh Meat & Cold Beer"
          className="form-control"
        />
        <button type="submit" className="btn btn-success">Visit Store</button>
      </form>
    );
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
};

export default StorePicker;
