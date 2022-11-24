import React from 'react'
import { useDispatch } from 'react-redux'
import {  toggle_todo } from './JS/actions/todoActions'
import 'bootstrap/dist/css/bootstrap.min.css';
import { EditTask } from './EditTask';

const TodoCard = ({el}) => {
   const dispatch=useDispatch()
  return (
    <div className='container'>
    <div className='d-flex justify-content-center'>
        <input type="checkbox" checked={el.isdone} onChange={()=>dispatch(toggle_todo(el.id))}/>
        <h2>{el.value}</h2>
       <EditTask el={el}/>
        
    </div>
    </div>
  )
}

export default TodoCard