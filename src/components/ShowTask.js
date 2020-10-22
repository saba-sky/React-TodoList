import React from "react";
import {FormControl, InputGroup} from "react-bootstrap";

const ShowTask = ({task}) => {
  return (
    <>
      <br/>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">{"ID"}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder={task.id}
          aria-label="Username"
          aria-describedby="basic-addon1"
          disabled={true}
        />
      </InputGroup>
      <br/>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">{"NAME"}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder={task.name}
          aria-label="Username"
          aria-describedby="basic-addon1"
          disabled={true}
        />
      </InputGroup>
      <br/>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">{"DATE"}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder={task.date.toUTCString()}
          aria-label="Username"
          aria-describedby="basic-addon1"
          disabled={true}
        />
      </InputGroup>
      <br/>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">{"DONE"}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder={task.done}
          aria-label="Username"
          aria-describedby="basic-addon1"
          disabled={true}
        />
      </InputGroup>
      <br/>
    </>
  );
};

export default ShowTask;