import React from 'react';

import TodoList from './component/TodoList';
import TodoControl from './component/TodoControl';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      items:[{title:'1',completed:true,id:1},{title:'2',completed:false,id:2}],
      show:0
    }
  }
  handleCompleted(id){
    let index = this.myFindIndex(id);
    // var index = this.state.items.findIndex(function(ele){
    //   return ele.id == id
    // })
    this.state.items[index].completed=!this.state.items[index].completed;
    this.setState({items:this.state.items})
  }
  handleDel(id){
    let index = this.myFindIndex(id);
    // var index = this.state.items.findIndex(function(ele){
    //   return ele.id == id
    // })
    this.state.items.splice(index,1);
    this.setState({items:this.state.items})
  }
  myFindIndex(id){
    var index = this.state.items.findIndex(ele => ele.id == id)
    return index;
  }
  handleShow(i){
    this.setState({show:i})
  }
  handleClick(){
    let inputValue = this.refs.input.value.trim() ;//trim() 去掉字符串前后空格
    this.refs.input.value=null;
    if (inputValue==''&&!inputValue){
      this.refs.input.focus();
      return alert('不能空')
    }
    let date = new Date();
    let newItem ={title:inputValue,completed:false,id:date.getTime()};
    this.state.items.push(newItem);
    this.setState({items:this.state.items});
    // this.setState((prevState) => ({
    //   items: prevState.items.concat(newItems)
    // }));
  }
  render(){
    if(this.state.show==0){
      var showItems = this.state.items
    }else if(this.state.show==1){
      var showItems = this.state.items.filter(function(element){
        return element.completed==false
      })
    }else if(this.state.show==2){
      var showItems = this.state.items.filter(function(element){
        return element.completed==true
      })
    }
    return(
      <div>
        <h1>TODO</h1>
        <input placeholder='add a todo' ref='input'/>
        <button onClick={this.handleClick.bind(this)}>ADD #{this.state.items.length+1}</button>
        <TodoList items={showItems} handleCompleted={this.handleCompleted.bind(this)} handleDel={this.handleDel.bind(this)}/>
        <TodoControl handleShow={this.handleShow.bind(this)} show={this.state.show}/>
      </div>
    )
  }
}

export default App;
