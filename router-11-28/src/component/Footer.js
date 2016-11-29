import React from 'react';

class Footer extends React.Component{
  render(){
    let styles= {
      color:'	#C10066 '
    }
    return(
      <div style={styles}>
        <h3 className="col-xs-3 col-xs-offset-9">---End---</h3>
      </div>
    )
  }
}

export default Footer;
