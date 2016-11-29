import React from 'react';

class App extends React.Component{
  render(){
    let show=[];
    for (var i = 0; i < this.props.comment.length; i++) {
      show.push(
        <div key={i}>
          <span>{this.props.comment[i]}</span>
          <span> {i+1}</span>
        </div>
      )
    }
    return(
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
        <h1>评论列表</h1>
        {show}
      </div>
    )
  }
}

export default App;
