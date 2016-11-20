import React from 'react';
import ReactDOM from 'react-dom';

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }
//
// setInterval(tick, 1000);

import App from './App';
import Text from './Text';
import SelectBar from './SelectBar';
import './main';

ReactDOM.render(<SelectBar />,document.getElementById('root'));
