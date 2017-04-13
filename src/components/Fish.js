import React from 'react';

class Fish extends React.Component {
  render() {
    const { details } = this.props;
    return (
      <li className="menu-fish">
        <hr />
        <div>
          <img src={details.image} alt={details.name} />
        </div>
        <h3>
          {details.name}
          <span>{details.price}</span>
        </h3>
        <p>{details.desc}</p>
        <button>Add To Order</button>
      </li>
    );
  }
}

export default Fish;
