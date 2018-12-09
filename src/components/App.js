import React, { Component } from 'react';
import ToDoItems from '../components/ToDoItems';
import AddItems from '../components/AddItems';
import '../style/App.css';

class App extends Component {

  state = {
    items: [
      {id:1 , name:'aya', age:24},
      {id:2 , name:'eman', age:25},
      {id:3 , name:'alaa', age:27},
      {id:4 , name:'arwa', age:21},
      {id:5 , name:'abdo', age:19},
    ]
  }

  deleteItem = (id) => {
    let allitems = this.state.items;
    let i = allitems.findIndex(item => item.id === id)
    allitems.splice(i,1)
    this.setState({allitems})
  }

  additem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }

  render() {
    return (
      <div className="App">
      
          <p>
            New To-Do React App
          </p>
          <ToDoItems itemsprops={this.state.items} deleteItem={this.deleteItem}/>
          <AddItems addnewitem={this.additem}/>
      
        
      </div>
    );
  }
}

export default App;
