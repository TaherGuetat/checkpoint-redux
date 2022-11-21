import React from 'react'

const TodoCard = ({el}) => {
   
  return (
    <div>
        <input type="checkbox" name="" id="" />
        <h1>{el.value}</h1>
        
        <button>Edit</button>
    </div>
  )
}

export default TodoCard