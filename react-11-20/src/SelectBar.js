import React from 'react';

class SelectBar extends React.Component{
  constructor(){
    super();
    this.state={
      tab:0
    }
  }
  handleClick(n){
    this.setState({tab:n})
  }
  render(){
    let box1 = (
      <div>1</div>
    )
    let box2 = (
      <div>2</div>
    )
    let box3 = (
      <div>3</div>
    )
    let box4 = (
      <div>4</div>
    )
    return(
      <div>
        <button onClick={this.handleClick.bind(this,0)}>- 1 -</button>
        <button onClick={this.handleClick.bind(this,1)}>- 2 -</button>
        <button onClick={this.handleClick.bind(this,2)}>- 3 -</button>
        <button onClick={this.handleClick.bind(this,3)}>- 4 -</button><br/>
        {/* {
          this.state.tab==0 ? '1':
            this.state.tab==1 ? '2':
              this.state.tab==2 ? '3':'4'
        } */}
        {
          this.state.tab==0 ? box1:
            this.state.tab==1 ? box2:
              this.state.tab==2 ? '3':'4'
        }
      </div>
    )
  }
}

export default SelectBar;
