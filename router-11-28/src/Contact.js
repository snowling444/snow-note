import React from 'react';
import axios from 'axios';

class Contact extends React.Component{
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  componentDidMount(){
    axios.get('https://api.github.com/users/snowling444')
     .then( res => this.setState({data:res.data,wait:false}))
  }
  render(){
    return(
      <div className="jumbotron">
        <h2 className='text-center'>我的Github信息</h2>
        {this.state.wait ? '请稍等' :
          <div>
            <p>{this.state.data.login}</p>
            <img src={this.state.data.avatar_url}/>
          </div>
        }
      </div>
    )
  }
}

export default Contact;
