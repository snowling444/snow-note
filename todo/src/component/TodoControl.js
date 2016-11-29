import React from 'react';

class TodoControl extends React.Component{
  handleClick(i){
    this.props.handleShow(i)
  }
  render(){
    let name = ['All','Active','Completed'];
    let buttons = name.map((item,index) => <button key={index} onClick={this.handleClick.bind(this,index)} style={this.props.show==index ? {backgroundColor:'#fff'} : null}>{item}</button>)
    return(
      <div>
        {buttons}
      </div>
    )
  }
}

export default TodoControl;
