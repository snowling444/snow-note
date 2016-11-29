import React from 'react';
import axios from 'axios';


class App1 extends React.Component{
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  componentDidMount(){
    axios.get('https://api.github.com/users/snowling444').then(response => this.setState({data:response.data,wait:false})).catch(error => alert(error))
  }
  render(){
    return(
      <div>
        {this.state.wait ? '正在加载数据' :
          <div>
            <img src={this.state.data.avatar_url}/>
            <p>Name：{this.state.data.login}</p>
          </div>}
      </div>
    )
  }
}

export default App1;
