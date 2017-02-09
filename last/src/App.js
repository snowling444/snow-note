import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import searchGit from './actions/action';

class App extends React.Component{
  handleClick(){
    let dispatch = this.props.dispatch;
    dispatch(searchGit('snowling444'))
  }
  render(){
    console.log(this.props);
    return(
      <div>
        <button onClick={this.handleClick.bind(this)}>S</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    info:state
  }
}

export default connect(mapStateToProps)(App);
