import React from 'react';

class List extends React.Component{
  constructor(){
    super();
    this.state={

    }
  }
  render(){
    let styles={
      ul:{listStyle:'none',color:'#040302',fontSize:'20px'},
      span:{cursor:'pointer',color:'#f33426',fontSize:'16px'},
      input:{marginTop: '10px',marginRight: '10px'}
    }
    return(
      <ul style={styles.ul}>
        {this.props.data.map( (item) =>
          <li key={item.id} style={{textDecoration:item.completed?'line-through':'none',backgroundColor:item.completed?'#e2e2e2':'white'}}>
            <input style={styles.input} type='checkbox' className='pull-left' defaultChecked={item.completed} onChange={() =>this.props.checked(item.id)}/>
            {item.text}
            <span style={styles.span} className='glyphicon glyphicon-remove pull-right'  aria-hidden="true"  onClick={()=>this.props.remove(item.id)}></span>
        </li>)}
      </ul>
    )
  }
}


export default List
