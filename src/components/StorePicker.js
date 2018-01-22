import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

  // This is like React's addEventListener
  goToStore(event){
    event.preventDefault();
    console.log("you changed the URL");

    // first grab the text from the box
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`);

    // second, we're going to transition rom / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`);
    
  }
  render() {
    // Any where else
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}}/>
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

// Add a context route
StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
