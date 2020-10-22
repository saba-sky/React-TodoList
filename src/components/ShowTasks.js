import React from "react";
import ShowTask from "./ShowTask";
import Button from 'react-bootstrap/Button';
import {ListGroup} from "react-bootstrap";

const ShowTasks = ({taskList, handleStatusChange, handleRemove}) => {
  return (
    <>
      <ListGroup>
        {taskList.map(tl => <ListGroup.Item key={tl.id}>
          <ShowTask task={tl} />
          <Button variant={"info"} onClick={() => handleStatusChange(tl.id)}>Done?</Button>
          {' '}
          <Button variant="danger" onClick={() => handleRemove(tl.id)} >Delete</Button>
        </ListGroup.Item>)}
      </ListGroup>
    </>
  );
};

export default ShowTasks;