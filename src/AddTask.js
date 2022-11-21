import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtask } from './JS/actions/todoActions'

export const AddTask = () => {
    const [addvalue,setAddvalue]=useState('')

    // const todo =useSelector((state)=>state.todo)
    const dispatch=useDispatch()
    const handleKeypress=(e)=>{
        if (e.key==='Enter') {
          dispatch(addtask(addvalue))
         }
        }
    const submitTask = (e) => {
        e.preventDefault();
    
    // if (!addvalue.trim()) {
    //     alert('Please fill in your task')
    // }
    
        setAddvalue('');
    }
  return (
    <div>
        <form onSubmit={submitTask}>
        <input type="text" value={addvalue} onChange={(e)=>setAddvalue(e.target.value)} onKeyPress={handleKeypress}/>
        <button type="submit" onClick={()=>dispatch(addtask(addvalue)) }>Add Task</button>
        </form>
    </div>
  )
}
