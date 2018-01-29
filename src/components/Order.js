import React from 'react';
import { formatPrice } from '../helpers';

import CSSTransitionGroup from 'react-addons-css-transition-group';

class Order extends React.Component {
  constructor(){
    super();
    this.renderOrder = this.renderOrder.bind(this);
  }

  renderOrder(key){
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const removeButton = <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>

    // if fish is unavailable
    if(!fish || fish['status'] === 'unavailable'){
      return <li key={key}>Sorry, {fish ? fish['name'] : 'fish'} is no longer available!{removeButton}</li>
    }

    // but when the fish is available
    return (
      <li key={key}>
        <span>
          <CSSTransitionGroup component="span" className="count" transitionName="count" transitionEnterTimeOut={250} transitionLeaveTimeOut={250}>
            <span key={count}>{count}</span>
          </CSSTransitionGroup>
          lbs {fish['name']} {removeButton}
        </span>
        <span className="price">{formatPrice(count * fish['price'])}</span>
      </li>
    )
  }
  render() {

    // access the value of fish1, fish2, fish3, etc. as an array
    const orderIds = Object.keys(this.props.order);

    const total = orderIds.reduce((prevTotal, key) => {

      // access the particular fish and its count from the fishes and order objects. fish = fish1: and all of its keys/values.

      // remember that fishes is a hash with many fish1: desc, image..., fish2: desc, image, price, etc. The same go with order object; order: {{fish1: #}, {fish2: #}}
      const fish = this.props.fishes[key]; // access the key/pair of that fish we further use its name, price, desc etc.
      const count = this.props.order[key]; //access the value of that fish.

      // check if the seafood is available to add to order
      const isAvailable = fish && fish['status'] === 'available';
      if(isAvailable) {
        return prevTotal + (count * fish['price'] || 0)
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Your Order</h2>

        <CSSTransitionGroup
          className="order"
          component="ul"
          transitionName="order"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
          >
          {orderIds.map(this.renderOrder)}
          <li className="total">
            <strong>Total:</strong>{formatPrice(total)}
          </li>
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default Order;
