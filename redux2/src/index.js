import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './App';

function counter(state = 0, action) {
  switch (action.type) {
  case 'CHANGE':
    return state + action.num;
  default:
    return state;
  }
}

let store = createStore(counter);

ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'))
