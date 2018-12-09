import React from "react";
import '../style/ToDoItems.css';


const ToDoItems = (props) => {
    const {itemsprops ,deleteItem } = props;
    const length = itemsprops.length;
    const listItems =  length ? (
        itemsprops.map( item => {
        return(
                <div key={item.id}>
                    <span>{item.id}</span>
                    <span>{item.name}</span>
                    <span>{item.age}</span>
                    <span onClick={ () => {deleteItem(item.id)} }>&times;</span>
                    
                </div>
                )
            })
        )
      : ( <p>No data to display</p> )
    
    return(
            <div className="head">
                
                    <span>id</span>
                    <span>name</span>
                    <span>age</span>
                    <span>action</span>
                

            <div> {listItems}</div>
     
            </div>
        );
}


export default ToDoItems;