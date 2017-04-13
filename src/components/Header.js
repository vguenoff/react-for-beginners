import React from 'react';

// stateless functional component
const Header = props => (
  <div className="Header">
    <div className="fish">
      <div className="fish-body">
        <div className="eye">
          <div className="pupil" />
        </div>
        <h1>fishie-fish</h1>
      </div>
      <div className="fish-fin">
        <div className="fin" />
        <div className="fin fin-bottom" />
      </div>
    </div>
    <h4 className="tagline">
      <span>
        {props.tagline}
      </span>
    </h4>
    <hr />
  </div>
);

export default Header;
