import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import AddForm from './AddForm';
import List from './List';

export default function Todo({ title }) {
  const [todos, setTodos] = useState([
    {
      text: 'Default Todo',
      isDone: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];

    setTodos(newTodos);
  };

  const doneTodo = (index) => {
    const newTodos = [...todos];

    newTodos[index].isDone = true;

    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];

    newTodos.splice(index, 1);

    setTodos(newTodos);
  };

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <AddForm addTodo={addTodo} />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <List todos={todos} doneTodo={doneTodo} removeTodo={removeTodo} />
        </Col>
      </Row>
    </Container>
  );
}
