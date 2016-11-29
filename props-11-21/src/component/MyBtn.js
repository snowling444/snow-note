import React,{Component,PropTypes} from 'react';

class MyBtn extends Component{
  render(){
    let styles={
      backgroundColor:this.props.bg,
      padding:'13px',
      border:'3px solid #ccc',
      borderRadius:'5px',
      fontSize:'20px',
      width:'100px',
      height:'50px',
      lineHeight:'20px',
      color:'#fff'
    }
    return(
      <button style={styles}>{this.props.title}</button>
    )
  }
}

MyBtn.defaultProps = {//默认
  title: 'HAHA',
  bg:'#000'
};

MyBtn.propTypes = {
  title: PropTypes.string,
  bg: PropTypes.string
};

export default MyBtn;
