import React from 'react';

class Main extends React.Component{
  render(){
    let color = '#fcc';
    let fontSize = '20px';
    // let obj = {color:color,fontSize:fontSize};
    let obj = {color,fontSize};
    return (
      <div className='main' id='main' style={obj}>Main</div>
    )
  }
}
export default Main;
