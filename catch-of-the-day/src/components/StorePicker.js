import React from 'react';

class StorePicker extends React.Component {
  render() {
    // example without jsx return React.createElement('p', { className: 'testing' }, 'Hello from StorePicker');
    return (
      // example jsx comment
      <form className="store-selector">
        {/* example jsx comment */}
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
