import React from 'react';
import AddForm from './AddForm';

class Inventory extends React.Component {
  render() {
    return (
      <div className="Inventory col-sm-4">
        <h2>Inventory</h2>
        <AddForm />
      </div>
    );
  }
}

export default Inventory;
