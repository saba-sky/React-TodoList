import React from 'react';
import {Button, Form} from "react-bootstrap";

const AddTask = ({taskName, handleTaskNameChange, checkbox, handleCheckboxChange, submitToTaskList}) => {

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Enter Task Name</Form.Label>
          <Form.Control type="text" placeholder="Task name" value={taskName} onChange={handleTaskNameChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Check type="checkbox" label="Done?" checked={checkbox} onChange={handleCheckboxChange}/>
        </Form.Group>
        <Button onClick={submitToTaskList} variant="primary" type="submit">
          Add Task
        </Button>
      </Form>
      <br/>
    </>
  );
};

export default AddTask;