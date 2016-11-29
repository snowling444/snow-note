import React from 'react';
import {Link} from 'react-router';

class MenuBar extends React.Component{
  render(){
    return(
      <div>
        <ul className="nav nav-tabs">
          <li role="presentation">
            <Link to="/" activeStyle={{color: '#A42D00'}} onlyActiveOnIndex={true}>Home</Link>
          </li>
          <li role="presentation">
            <Link to="/about" activeStyle={{color: '#A42D00'}}>About</Link>
          </li>
          <li role="presentation">
            <Link to="/contact" activeStyle={{color: '#A42D00'}}>Contact</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default MenuBar;
