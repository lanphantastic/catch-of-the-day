import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom'
import StorePicker from './components/StorePicker';

render(<StorePicker/>, document.querySelector('#main'));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
