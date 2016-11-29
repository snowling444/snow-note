import React from 'react';
import $ from 'jquery';


class App extends React.Component{
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  componentDidMount(){
    var _this = this;
    // var request = new XMLHttpRequest();
    // request.onreadystatechange=function(){
    //   if(request.readyState==4 && request.status==200){
    //     var dataObj =JSON.parse(request.responseText);
    //     console.log(dataObj);
    //     _this.setState({
    //       data:dataObj,
    //       wait:false
    //     })
    //   }
    // }
    // request.open('GET','https://api.github.com/users/snowling444',true);
    // request.send();

    $.get('https://api.github.com/users/snowling444',function(data,status){
      alert(status);
      _this.setState({
        data:data,
        wait:false
      })
    })
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

export default App;
