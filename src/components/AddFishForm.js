import React from 'react';

class AddFishForm extends React.Component {

  // when the user clicks on '+ Add Item', the click will activate the createFish function. This function will take the data the user have input into the form (it's saved in the 'e' on line 22), and create a fish object on line 9.
  createFish(event){
    event.preventDefault();
    console.log('Gonna make some fish! ');
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value,
    }
    this.props.addFish(fish);
    this.fishForm.reset();
  }

  render() {
    return (
      <form ref={(input) => this.fishForm = input} className="fish-edit" onSubmit={(e) => this.createFish(e)}>
        <input ref={(input) => this.name = input}  type="text" placeholder="Fish Name" />
        <input ref={(input) => this.price = input} type="text" placeholder="Fish Price" />

        <select ref={(input) => this.status = input}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <textarea ref={(input) => this.desc = input}              placeholder="Fish Desc"></textarea>
        <input    ref={(input) => this.image = input} type="text" placeholder="Fish Image"/>
        <button type="submit">+ Add Item</button>
      </form>
    )
  }
}

export default AddFishForm;
