import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {

  constructor(){
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);

    // get initial state
    this.state = {
      fishes: {},
      order: {}
    };
  }

  // Everytime we make a function/method, we have to bind them under super();

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

  loadSamples(){
    this.setState({
      fishes: sampleFishes
    })
  }

  addToOrder(key){
    // take a copy of our state
    const order = {...this.state.order};

    // update or dadd the new number of fish ordered
    order[key] = order[key] + 1 || 1;

    // update our state
    this.setState({ order }) // or use order: order
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">

          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            {
              Object
                .keys(this.state.fishes)
                .map(key =>
                  <Fish key={key}
                  index={key}
                  details={this.state.fishes[key]}
                  addToOrder={this.addToOrder}
                  />)
            }
          </ul>
        </div>

        {/*pass in App's component's states: fishes and order */}
        <Order fishes={this.state.fishes} order={this.state.order}/>

        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />

      {/* remember that addFish and loadSamples becomes a props when you add after the CAPITALIZE component's name */}

      </div>
      // END OF catch-of-the-day
    )
  }
}

export default App;

/*put any property between Header and tagline (line 30) above like age="5000", cool={true} or any attribute will be the property and value. But it won't display onto the view so in order to access it, go to your Header.js and use props.tagline (line 15) */
