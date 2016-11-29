import React from 'react';
import $ from 'jquery';

import Demo from './Demo'

class App extends React.Component{
  componentWillMount(){
    console.log('will');
    this.state.num=2;
  }
  componentDidMount(){
    console.log('did');
    console.log(this.refs.a);
    // this.refs.a.style.color='#058';
    $(this.refs.a).css({color:'#058'})
    $('#ha').click(function(){
      console.log('aaa');
      alert('haha')
    })
    // this.interval = setInterval(() => this.tick(), 1000);
  }
  // tick(){
  //   this.setState({num : this.state.num +1})
  // }
  constructor(){
    super();
    this.state={
      num : 0,
      show : true
    }
    console.log('initial state')
  }
  handleClick(){
    this.setState({num : this.state.num +1})
  }
  componentWillReceiveProps(){console.log('componentWillReceiveProps')}
  shouldComponentUpdate(nextPros,nextState){
    console.log('shouldComponentUpdate');
    console.log(nextPros,nextState);
    // if(nextState.num>5){
    //   return false
    // }
    return true
  }
  componentWillUpdate(){console.log('componentWillUpdate')}
  componentDidUpdate(){console.log('componentDidUpdate')}
  handleDestroy(){
    this.setState({show:false})
  }
  render(){
    console.log("render")
    return(
      <div>
        Snow {this.state.num}
        <button onClick={this.handleClick.bind(this)}>+1</button>
        <button onClick={this.handleDestroy.bind(this)}>x</button>
        {this.state.show ? <Demo num={this.state.num}/> : null}
        <p ref='a' id='ha'>P</p>
      </div>
    )
  }
}

export default App;
