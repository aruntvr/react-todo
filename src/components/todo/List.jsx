import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';

export default ({ doneTodo, removeTodo, todos }) => {
  console.log(todos);
  return (
    <Container>
      {todos?.map((todo, index) => {
        return (
          <Card
            key={index}
            className="mt-1"
            style={{
              textDecoration: todo?.isDone === true ? 'line-through' : '',
            }}
          >
            <Card.Body>
              {todo.text}
              <Button
                className="m-1"
                variant="danger"
                onClick={() => removeTodo(index)}
              >
                {' '}
                Remove{' '}
              </Button>
              <Button
                className="m-1"
                variant="secondary"
                onClick={() => doneTodo(index)}
              >
                {' '}
                Done{' '}
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};
