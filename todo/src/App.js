import React from 'react';

import TodoList from './component/TodoList';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      items:[{title:'1',completed:true},{title:'2',completed:false}]
    }
  }
  handleClick(){
    let inputValue = this.refs.input.value.trim() ;//trim() 去掉字符串前后空格
    this.refs.input.value=null;
    if (inputValue==''&&!inputValue){
      this.refs.input.focus();
      return alert('不能空')
    }
    let newItem ={title:inputValue,completed:false};
    this.state.items.push(newItem);
    this.setState({items:this.state.items});
    // this.setState((prevState) => ({
    //   items: prevState.items.concat(newItems)
    // }));
  }
  render(){
    return(
      <div>
        <h1>TODO</h1>
        <TodoList items={this.state.items}/>
        <input placeholder='add a todo' ref='input'/>
        <button onClick={this.handleClick.bind(this)}>ADD #{this.state.items.length+1}</button>
      </div>
    )
  }
}

export default App;
