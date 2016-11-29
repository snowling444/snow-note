import React from 'react';


class Demo extends React.Component{
  constructor(){
    super();
    this.state={
      demoNum : 0
    }
  }
  componentDidMount(){
    this.interval = setInterval(() => this.tick(), 1000);
  }
  tick(){
    this.setState({demoNum : this.state.demoNum +1})
  }
  componentWillReceiveProps(){console.log('componentWillReceiveProps2')}
  shouldComponentUpdate(nextPros,nextState){
    console.log('shouldComponentUpdate2');
    console.log(nextPros,nextState);
    return true
  }
  componentWillUpdate(){console.log('componentWillUpdate2')}
  componentDidUpdate(){console.log('componentDidUpdate2')}
  componentWillUnmount(){
    console.log('componentWillUnmount')
    clearInterval(this.interval)
  }
  render(){
    return(
      <div>
        Demo {this.props.num}<br/>
        {this.state.demoNum}
      </div>
    )
  }
}

export default Demo;
