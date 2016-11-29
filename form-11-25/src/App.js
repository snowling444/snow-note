import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state={fontSize:36,show:false}
  }
  handleClick(e){
    console.log(e.deltaY);
    this.setState({
      fontSize:this.state.fontSize + e.deltaY/100
    })
  }
  handleContext(e){
    e.preventDefault();
    this.setState({show:!this.state.show})
  }
  handleJump(e){
    e.preventDefault();
  }
  render(){
    let styles={
      fontSize:`${this.state.fontSize}px`
    }
    return(
      <div
        onWheel={this.handleClick.bind(this)}
        onContextMenu={this.handleContext.bind(this)}
        style={styles}>
        Snow
        {this.state.show ? 'ling':null}
        <a href='https://facebook.github.io/react/docs/events.html' onClick={this.handleJump.bind(this)}>A</a>
      </div>
    )
  }
}

export default App;
