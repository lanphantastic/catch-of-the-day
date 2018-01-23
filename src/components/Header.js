import React from 'react';

const Header = (props) => {
  return (
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
        </span>
        Day
      </h1>
      <h3 className="tagline"><span>{props.tagline}</span></h3>
    </header>
  )
}

export default Header;

// Since the header only render some html dom, we don't need a full react component. We just need a stateless functions. Meaning, if you have any other method besides 'render', we can make it a stateless functions. 
