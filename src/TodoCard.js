import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { edit, toggle_todo } from './JS/actions/todoActions'
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoCard = ({el}) => {
   const dispatch=useDispatch()
  return (
    <div className='container'>
    <div className='d-flex justify-content-center'>
        <input type="checkbox" checked={el.isdone} onChange={()=>dispatch(toggle_todo(el.id))}/>
        <h2>{el.value}</h2>
        
        <Button onClick={()=>dispatch(edit(el))}>Edit</Button>
    </div>
    </div>
  )
}

export default TodoCard