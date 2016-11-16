import React from 'react';

import {blue} from './style';

class Main extends React.Component{
  render(){
    let color = blue;
    let fontSize = '20px';
    // let obj = {color:color,fontSize:fontSize};
    let obj = {color,fontSize};
    return (
      <div className='main' id='main' style={obj}>Main</div>
    )
  }
}
export default Main;
