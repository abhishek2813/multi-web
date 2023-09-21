import React, { useContext, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { TodoData } from "../hooks/TodoContext";

function TodoForm() {
  const {addTodo} = useContext(TodoData);
  const [inputVal, setInputVal] = useState("");
  const handleAdd = ()=>{
    if(inputVal!==""){
      const addNewTodo = {id:new Date(),name:inputVal,isComplete:false}
      // console.warn(addNewTodo);
      addTodo(addNewTodo)
      setInputVal("")
    }else{
      alert("Todo Value Should Not Empty")
    }
  }
  return (
    <>
      <Row className="p-3">
        <Col md={11}>
          <Form.Label visuallyHidden>Add Todo</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setInputVal(e.target.value)}
            value={inputVal}
            placeholder="Add Todo"
          />
        </Col>
        <Col md={1} className="">
          <Button onClick={handleAdd} className="mb-2">
            Add
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default TodoForm;
