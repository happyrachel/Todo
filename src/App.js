import React from 'react';
import List from './Components/List.js';
import Contoller from './Components/Contoller.js';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      inputValue:'',
      data:[
        // {text:'aaa',completed:false,id:1},
        // {text:'bbb',completed:false,id:2},
        // {text:'ccc',completed:false,id:3}
      ],
      visible:'All'
    }
  }
  handleSubmit(e){
    e.preventDefault();
    let newData =this.state.inputValue.trim();
    if(newData.length===0){
      alert('输入的内容不可以为空，请重新输入')
    }else{
      let newItem={
        text:newData,
        completed:false,
        id:new Date().getTime()
      }
      this.setState({
        data:[...this.state.data,newItem]
      })
    }
    this.setState({inputValue:''})
  }
  handleChange(e){
    this.setState({inputValue:e.target.value})
  }
  handleChecked(id){
    let index=this.state.data.findIndex(item=>item.id===id)
    this.state.data[index].completed=!this.state.data[index].completed
    this.setState({data:this.state.data})
  }
  handleRemove(id){
    let index=this.state.data.findIndex(item=>item.id===id)
    this.state.data.splice(index,1)
    this.setState({data:this.state.data})
  }
  handleControl(item){
    this.setState({visible:item})
  }
  componentWillMount(){
    if (localStorage.todos) {
      this.setState({data: JSON.parse(window.localStorage.getItem('todos') || '[]') })
    }
  }
  render(){
    localStorage.setItem('todos',JSON.stringify(this.state.data))
    let styles={
      div:{
        maxWidth:'500px',
        margin:'0 auto',
      },
      h1:{
        textAlign: "center"
      }
    }
    let newArray;
    switch (this.state.visible) {
      case 'Active':
        newArray=this.state.data.filter(item=>item.completed==false)
        break;
      case 'Completed':
        newArray=this.state.data.filter(item=>item.completed==true)
        break;
      default:
        newArray=this.state.data
    }
    return(
      <div style={styles.div}>
        <h1 style={styles.h1}>ToDo</h1>
        <List data={newArray} checked={this.handleChecked.bind(this)} remove={this.handleRemove.bind(this)}/>
        <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
          <div className='form-group'>
            <input type='text' className='form-control'  value={this.state.inputValue} onChange={this.handleChange.bind(this)}/>
          </div>
          <button className='btn btn-default'>Add#{newArray.length+1}</button>
        </form>
        <Contoller visible={this.state.visible} control={this.handleControl.bind(this)}/>
      </div>
    )
  }
}


export default App
