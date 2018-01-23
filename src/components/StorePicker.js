import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

  // This is like React's addEventListener
  goToStore(event){
    event.preventDefault();
    console.log("you changed the URL");

    // first grab the text from the box
    const storeId = this.storeName.value;
    console.log(`Going to ${storeId}`);

    // second, we're going to transition rom / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`);
    // To get 'transitionTo', we need contextTypes and PropTypes from line 32
  }
  render() {
    // Any where else
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(name) => { this.storeName = name}}/>
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

// Add a context route
StorePicker.contextTypes = {
  router: React.PropTypes.object
}
// This will tell React that it expects something call 'router' for StorePicker. React will this available.

export default StorePicker;
