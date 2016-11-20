import React from 'react';

import nalidou from '../images/nalidou.jpg';

let OutStyles = {color: 'red'}
function Styles (){
  return{color: 'blue'}
}
class Header extends React.Component{
  constructor(){
    super();
    this.state={
      show: true,
      show1:'aaai',
      hello:0
    }
  }
  handleClick(){
    // console.log("nan");
    // console.log(this);
    this.setState({
      show:!this.state.show,
      hello:this.state.hello +1
    })
  }
  styles(){
    return{color: 'blue'}
  }
  render(){
    let styles = {
      ul:{
        listStyle: 'none',padding: '0',
        // backgroundImage: 'url(' + nalidou +')',
        backgroundImage:`url(${nalidou})`
      },
      li:{
        // display: 'inline-block',
        display: this.state.show?'block':'inline-block',
        padding: '10px 20px'
      }
    }
    return(
      <div>
        {this.state.hello}
        {this.state.show? '显示' : '隐藏'}
        <h1 style={this.styles()}>nono</h1>
        <h2 style={OutStyles}>nono</h2>
        <h2 style={Styles()}>nono</h2>
        <ul className='menu' style={styles.ul}>
          <li style={styles.li}>1</li>
          <li style={styles.li}>2</li>
          <li style={styles.li}>3</li>
          <li style={styles.li}>4</li>
          <li style={styles.li}>5</li>
          <li style={styles.li} onClick={this.handleClick.bind(this)}>6</li>
          <li style={styles.li}>{this.state.show1}</li>
        </ul>
        <img src={nalidou}/>
      </div>
    )
  }
}


export default Header;
