// DEPENDENCIES
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

// STYLING
import './css/style.css';

// COMPONENTS
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

// STATELESS FUNCTIONS WITH ROUTES
const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker}/>
        <Match pattern="/store/:storeId" component={App}/>
        <Miss component={NotFound}/>
      </div>
    </BrowserRouter>
  )
}

// With BrowserRouter, one can go to the all three routes BUT manually. We'll need to use context route in StorePicker to automatically go to the store/:storeId.

render(<Root/>, document.querySelector('#main'));
