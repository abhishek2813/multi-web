import React, { useContext, useState } from "react";
import { TodoData } from "../hooks/TodoContext";
import TodoForm from "../components/TodoForm";
import { Container, Col, Row } from "react-bootstrap";
import TodoList from "../components/TodoList";

function Todo() {
  const { todos } = useContext(TodoData);
  return (
    <Container>
      <Row className="my-3">
        <Col className="p-3 shadow-lg rounded" md={{ span: 10, offset: 1 }}>
          <TodoForm />
        </Col>
      </Row>
      <Row>
        {todos &&
          todos.map((item) => (
            <Col md={3} className="my-2" key={item.id}>
              <TodoList todo={item} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Todo;
