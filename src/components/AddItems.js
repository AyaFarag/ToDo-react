import React , {Component} from 'react';
import '../style/AddItems.css';

class AddItems extends Component {
    state = {
        name : '',
        age : '',
    }

    handelChangeName = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault();
        this.props.additem(this.state);
        this.setState({
            name: '',
            age: '',
        })
    }


      render(){
          return(
              <div>
                  <p>AddItem component</p>
                    <form onSubmit={this.handelSubmit}>
                        <input type="text" placeholder="Enter your Name" id="name" onChange={this.handelChange} value={this.state.name} />
                        <input type="number" placeholder="Enter your Age" id="age" onChange={this.handelChange} value={this.state.age} />
                        <input type="submit" value="Add" />
                    </form>
              </div>
          )
      }
}

export default AddItems;