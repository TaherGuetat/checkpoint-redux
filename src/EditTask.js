import Modal from "react-modal";
import React from "react";

import { useDispatch } from "react-redux";
import { edit } from "./JS/actions/todoActions";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

export function EditTask({el}) {
  
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const[todoname,setTodoname]=React.useState(el.value)

const dispatch=useDispatch()

  const handleSubmit=(e)=>{
    e.preventDefault()
    
    if (todoname.trim()) {
      dispatch(edit({...el,value:todoname}))
        
        closeModal()
    } else {
        alert('hello')
    }
    
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>Edit task</div>
        <form onSubmit={handleSubmit}>
          <input value={todoname}onChange={(e)=>setTodoname(e.target.value)} />
          <button>Save</button>
          <button >Cancel</button>
        </form>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}