import React from 'react';

// stateless functional component
const Header = props => (
  <div className="Header col-sm-4">
    <h1>b-u-r-g-e-r-s</h1>
    <h4 className="tagline">
      <span>
        {props.tagline}
      </span>
    </h4>
  </div>
);

export default Header;
