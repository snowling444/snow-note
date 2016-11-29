import React from 'react';

import Add from './Add';

class TestRef extends React.Component{
  handleClick(){
    this.refs.add.handleClick();
  }
  render(){
    return(
      <div>
        <Add ref='add'/>
        <Add>m</Add>
        <button onClick={this.handleClick.bind(this)}>(+1)</button>
      </div>
    )
  }
}

export default TestRef;
