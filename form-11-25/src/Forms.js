import React from 'react';

class Forms extends React.Component{
  constructor(){
    super();
    this.state={value:' '}
  }
  handleSubmit(e){
    e.preventDefault();
    // console.log(this.refs.input.value);
    console.log(this.state.value)
  }
  handleChange(e){
    this.setState({value:e.target.value})
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input name='aaa' value={this.state.value} ref='input' onChange={this.handleChange.bind(this)}/>  {/* defaultValue='666' placeholder='666'*/}
          {/* <textarea value={this.state.value} onChange={this.handleChange.bind(this)}/> */}
          <select>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
          <button type='submit'>bbb</button>
          {/* <button type='reset'>ccc</button> */}
        </form>
      </div>
    )
  }
}

export default Forms;
