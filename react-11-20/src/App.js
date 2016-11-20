import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      // like:true,
      show:false
    }
  }
  // myEvent(){
  //   this.setState({
  //     like:! this.state.like
  //   })
  // }
  handleClick(){
    // this.setState({show:!this.state.show})
    // this.setState(function(prevState,props){
    //   return{
    //     show:!prevState.show
    //   }
    // })
    //箭头函数
    this.setState( (prevState,props) => ({show:!prevState.show}) )
  }
  render(){
    // let styles={
    //   div:{
    //     height:'20px',
    //     width:'300px',
    //     backgroundColor:'#058',
    //     display:this.state.like ?'block':'none'
    //   }
    // }
    // if(this.state.like){
    //   var content ='like';
    // }else{
    //   var content ='dislike';
    // }
    // let content = this.state.like ? 'like':'dislike'
    return(
      // <div onClick={this.myEvent.bind(this)}>
      //   <p>U {content}</p>
      //   <div style={styles.div}></div>
      // </div>
      <div>
        <button onClick={this.handleClick.bind(this)}>Click</button>
        <div className='cover'
          style={{display:this.state.show? 'block':'none'}}
          onClick={this.handleClick.bind(this)}></div>
        <div className='menu' style={{left:this.state.show? '0':'-200px'}}>
          <h3>Title</h3>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
      </div>
    )
  }
}

export default App;
