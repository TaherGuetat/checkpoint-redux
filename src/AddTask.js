import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addtask } from "./JS/actions/todoActions";

export const AddTask = () => {
  const [addvalue, setAddvalue] = useState("");

  const dispatch = useDispatch();

  const submitTask = (e) => {
    e.preventDefault();
    dispatch(addtask(addvalue))
    setAddvalue("");
  };
  return (
    <div>
      <Form onSubmit={submitTask}>
        <Form.Group className="d-flex flex-row justify-content-center mb-3 mt-3 " controlId="formBasicEmail">
          <Button 
            variant="primary"
            type="submit"
            
          >
            Add Task
          </Button>
          <div style={{width:'300px'}}>
          <input
            size="sm"
            className="mt-1 ms-2"
            type="text"
            value={addvalue}
            onChange={(e) => setAddvalue(e.target.value)}
        
          />
            
         
          
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};
