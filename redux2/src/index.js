import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

function counter(state = 0, action) {
  switch (action.type) {
  case 'CHANGE':
    return state + action.num;
  default:
    return state;
  }
}

let store = createStore(counter);

function actionCreate(num){
  return {type:'CHANGE',num}
}

class App extends React.Component{
  handleClick(num){
    store.dispatch(actionCreate(num))
  }
  render(){
    return(
      <div>
        {store.getState()}<br />
        <button onClick={this.handleClick.bind(this,4)}>+</button>
        <button onClick={this.handleClick.bind(this,-6)}>-</button>
      </div>
    )
  }
}

let PureRender = () => {
  ReactDOM.render(<App />,document.getElementById('root'))
}
PureRender();
store.subscribe(PureRender);
