import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { filtertask } from './JS/actions/todoActions'
import 'bootstrap/dist/css/bootstrap.min.css';

const FilterTask = (el) => {
    const dispatch=useDispatch()

  return (
    <div className='d-flex justify-content-around '>
        <Button variant="outline-primary" onClick={()=>dispatch(filtertask('done'))}>Done</Button>
        <Button variant="outline-primary" onClick={()=>dispatch(filtertask('undone'))}>Undone</Button>
        <Button variant="outline-primary" onClick={()=>dispatch(filtertask('all'))}>All</Button>

    </div>
  )
}

export default FilterTask