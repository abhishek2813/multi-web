import React, { useContext, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { TodoData } from "../hooks/TodoContext";

function TodoList({ todo }) {
  const [isEdit, setIsEdit] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.name);
  const { deleteTodo, completeTodo, updateTodo } = useContext(TodoData);

  const handleUpdate = () => {
    setIsEdit(true);
  };

  const handleSave = () => {
    if (newTodo !== "") {
      updateTodo(todo.id, newTodo);
      setIsEdit(false);
    } else {
      alert("Todo Can Not Empty");
    }
  };

  const handleClose = () => {
    setNewTodo(todo.name);
    setIsEdit(false);
  };

  return (
    <div>
      <Card className="p-3 shadow-lg">
        <Card.Title className="">{todo.name}</Card.Title>
        <Card.Body>
          {isEdit && (
            <Card.Text>
              <Form.Control
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
              />
              <Button variant="success" className="m-3" onClick={handleSave}>
                Save
              </Button>
              <Button variant="danger" className="m-3" onClick={handleClose}>
                Close
              </Button>
            </Card.Text>
          )}
          <Card.Text className={todo.isComplete ? "text-success" : "text-info"}>
            <Form.Check // prettier-ignore
              type="checkbox"
              itemScope={todo.isComplete}
              onChange={(e) => completeTodo(todo.id)}
              label={todo.isComplete ? "Complete" : "Not Complete"}
            />
          </Card.Text>
          <Card.Link className="btn btn-warning" onClick={handleUpdate}>
            Edit
          </Card.Link>
          <Card.Link
            className="btn btn-danger"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TodoList;
