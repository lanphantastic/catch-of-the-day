import React from 'react';

class StorePicker extends React.Component {
  render() {
    // Any where else. this is regular comment for js
    return (
      <form className="store-selector">
      { /* This is a comment for jsx. Can only be inside a parent. Also, the return can ONLY return one parent. If you want to use two, wrap everything inside under a div.
      Also, put the comment after the form (or any first parent element) or before the return on line 6 */}
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="Submit">Vist Store</button>
      </form>
    )
  }
}

export default StorePicker;

// TIPS
/* To use emmet package, use 'control + E'. For example, if you type say form.store-selector, press 'control + E' to automatically see the form element with the class.
*/
