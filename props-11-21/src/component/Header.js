import React from 'react';

import MyBtn from './MyBtn';

class Header extends React.Component{
  render(){
    return(
      <div>
        <MyBtn title='Header' bg="#666"/>
        <MyBtn/>
      </div>
    )
  }
}

export default Header;
