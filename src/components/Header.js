import React from 'react';

// stateless functional component
const Header = props => (
  <div className="Header col-sm-4">
    <div className="fish">
      <div className="fish-body">
        <div className="eye">
          <div className="pupil"></div>
        </div>
      <h1>fishie-fish</h1>
      </div>
      <div className="fin"></div>
      <div className="fin fin-bottom"></div>
    </div>
    <h4 className="tagline">
      <span>
        {props.tagline}
      </span>
    </h4>
  </div>
);

export default Header;
