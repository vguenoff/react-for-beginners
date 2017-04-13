import React from 'react';
import { formatPrice } from '../helpers';


class Fish extends React.Component {
  render() {
    const { details } = this.props;
    const isAvailable = details.status === 'available';
    const buttonText = isAvailable ? 'Add To Order' : 'Sold Out!';
    return (
      <li className="menu-fish">
        <div>
          <img src={details.image} alt={details.name} />
        </div>
        <h3>
          {details.name}
          <span>{formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button className="btn btn-y">{buttonText}</button>
      </li>
    );
  }
}

export default Fish;
