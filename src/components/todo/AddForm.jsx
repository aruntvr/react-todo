import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
export default function add({ addTodo }) {
  const [value, setValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (value === '') {
      return;
    }
    console.log(value);
    addTodo(value);
    setValue('');
  };
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>New Task</Form.Label>
        <Form.Control
          value={value}
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mt-2">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}
