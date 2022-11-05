import React, { useState } from 'react'
import './Todo.css'
import todo from './Todolist.png'

const Todo = () => {

  const [InputData, setInputData] = useState('')
  
  //Add items in TodoList
  const [items, setItems] = useState([])

  const AddItem = () =>{
    if(!InputData){
      alert('Please Enter the data before clicking')
    }else{
      setItems([...items, InputData])
      setInputData('')
    }
  }

  //Delete each item form list
  const ItemDelete = (id) =>{
    const updatedItems = items.filter((curItem, ind)=>{
        return ind !==id;
    })
    setItems(updatedItems)
  }

  // Remove all items 

  const RemoveAllItems = () =>{
    setItems([])
  }

  return (
    <div className='container'>
        <div className='subcontainer'>
            <figure>
                <img src={todo} alt="todologo" className='todoimg'/>
                <figcaption className='para'>Add Your List Here</figcaption>
            </figure>

            <div>
              <input type="text"  placeholder='Add Items....' className='inputext'
              value={InputData} onChange={(e)=>setInputData(e.target.value)}
              />
              <i className="fa-solid fa-plus" title='Add Item' onClick={AddItem}></i>
            </div>

            <div>
              {
                items.map((currElem, index)=>{
                  return(
                    <div className='eachitem' key={index}>
                      <h3>{currElem}</h3>
                      <i className="fa-solid fa-trash-can" onClick={()=>ItemDelete(index)}></i>
                  </div>
                  )
                })
              }
              
            </div>
            <button className='btn' onClick={RemoveAllItems}>REMOVE ALL</button>
        </div>
    </div>
  )
}

export default Todo