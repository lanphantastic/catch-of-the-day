import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {


  constructor(){
    super();
    this.addFish = this.addFish.bind(this);
    // get initial state
    this.state = {
      fishes: {},
      order: {}
    };
  }

  // This methods will let the fish 'swim' up to the App.js from AddFishForm.js
  addFish(fish){

    // udpate our state
    const fishes = {...this.state.fishes}; // takes the current fishes state and put it into a new fishes state.

    // add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // set state
    this.setState({ fishes }); // alternative: fishes: fishes (line 13: line 22)
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App;

{/*put any property between Header and tagline (line 30) above like age="5000", cool={true} or any attribute will be the property and value. But it won't display onto the view so in order to access it, go to your Header.js and use props.tagline (line 15) */}
