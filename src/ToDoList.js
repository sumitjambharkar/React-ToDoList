import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import './ToDoList.css'



const ToDoList = () => {
    const [item, setitem] = useState("");
    const [newitem, setnewitem] = useState([])

    const itemEvent =(event)=>{
        setitem(event.target.value)

    }
    const listItem = () => {
        setnewitem((preValue) =>{
            return[...preValue,item]
            
        });
        return setitem("")
             
    }
    const deleteItem =(id)=>{
        console.log("delete");
        setnewitem((setitem)=>{
            return setitem.filter((arrElem,index)=>{
                return index !== id;
            })
        })
    }
    return (
        <>
        <div className="main_div">
        <div className="center_div">
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type="text" placeholder="Add item" value={item} onChange={itemEvent} />
        <Button  onClick={listItem}>
            <AddIcon/>
        </Button>
        <br/>
        <ol>
           { newitem.map((val,index,id) =>{
                return  <div key={index} className="row">
                    <li>{val}
                    <span><Button><DeleteIcon onClick={()=>{
                        deleteItem(index,id)    
                    }} /></Button></span></li>
                </div>
            })}
        </ol>
        </div>
        </div>
        </>
    )
}
export default ToDoList;