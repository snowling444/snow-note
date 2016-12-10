import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      username:''
    }
  }
  componentWillMount(){
    this.setState({
      username:'Snow'
    })
  }
  render(){
    return(
      <div>
        {this.state.username}
      </div>
    )
  }
}

export default App;
