import React from 'react';

class Header extends React.Component{
  render(){
    let styles ={
      ul:{listStyle:'none'},
      li:{color:'blue',display:'inline-block',marginLeft:'20px'}
    }
    return (
      <div className='header' style={{color:'#666',fontSize:'30px'}}>Header
        <ul style={styles.ul}>
          <li style={styles.li}>a</li>
          <li style={styles.li}>b</li>
          <li style={styles.li}>c</li>
          <li style={styles.li}>d</li>
          <li style={styles.li}>e</li>
        </ul>
      </div>
    )
  }
}
export default Header;
