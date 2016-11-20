import React from 'react';

class Text extends React.Component{
  constructor(){
    super();
    this.state={num:0}
  }
  handleClick(n){
    this.setState({num:this.state.num+n})
  }
  render(){
    return(
      <div>
        数量:{this.state.num}<br/>
        <button onClick={this.handleClick.bind(this,+1)}>+1</button>
        <button onClick={this.handleClick.bind(this,-1)}>-1</button>
      </div>
    )
  }
}

export default Text;
