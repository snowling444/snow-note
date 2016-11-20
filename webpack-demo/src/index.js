// require ('babel-polyfill');
require ('./text');

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class Hello extends React.Component{
  render(){
    return (
      <div style={{backgroundColor:'#086'}}>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}



// class Text extends React.Component{
//   render(){
//     return (
//       <div>
//         haha
//         <Hello/>
//       </div>
//     )
//   }
// }
//
// class Hello extends React.Component{
//   render(){
//     let xx = 100;
//     return (
//       <div>
//         <p>---</p>
//         {alert("puchi"),console.log("aa")}
//         {3+8}<br/>
//         {xx}
//         {/*注释*/}
//         <p>---</p>
//       </div>
//     )
//   }
// }


// var ele = React.createElement(
//   'div',
//   {className:'saidbar'},
//   'hello'
// )
ReactDOM.render(
  // ele,
  <Hello/>,
  // <Text/>,
  // <div><Hello/><Text/></div>,
  document.getElementById('root')
)


// ReactDOM.render(//render 渲染
//   <div><p>hello</p><p>hello</p></div>,
//   document.getElementById('root')
// )
