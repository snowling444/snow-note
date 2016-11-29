import React from 'react';

class GitShow extends React.Component{
  render(){
    let info = this.props.gitinfo;
    return(
      <div>
        <a href={info.blog}>{info.name}</a>
        <p>用户名：{info.login}</p>
      </div>
    )
  }
}

export default GitShow;
