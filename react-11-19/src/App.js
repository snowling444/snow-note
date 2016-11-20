import React from 'react';

import Header from './components/Header';//自己定义的组件 名称首字母大写

// class App extends React.Component{
//   render(){
//     return(
//       <div>haha</div>
//     )
//   }
// }

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
      </div>
    )
  }
}

// function Welcome(){  //首字母大写
  // return(
  //   <div>hahahaha</div>
  // )
// }

// var Welcome = React.createClass({
//   render: function(){
//     return(
//       <div>hahahahahahaha</div>
//     )
//   }
// })

export default App;
// export default Welcome;
