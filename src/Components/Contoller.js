import React from 'react';

class Contoller extends React.Component{
  constructor(){
    super();
    this.state={
      btns:['All','Active','Completed']
    }
  }
  render(){
    let styles={
      btns:{marginRight:'10px',marginTop:'10px'}
    }
    return(
      <div>
        {this.state.btns.map( item => <button key={Math.random()} className={this.props.visible==item?'btn btn-success':'btn btn-default'} onClick={() => this.props.control(item)} style={styles.btns}> {item}</button>)}
      </div>
    )
  }
}


export default Contoller
