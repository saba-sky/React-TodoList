import React, {useState} from 'react';
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import ShowTasks from "./components/ShowTasks";
import {v4 as uuidv4} from 'uuid';
import './App.css';
import {Container} from "react-bootstrap";


const App = () => {
  const [taskName, setTaskName] = useState('');
  const [checked, setChecked] = useState(false);

  const [taskList, setTaskList] = useState([
    {
      id: uuidv4(),
      name: 'Task 1',
      date: new Date('2020-12-17T03:24:00'),
      done: 'true',
    },
    {
      id: uuidv4(),
      name: 'Task 2',
      date: new Date('2020-12-17T03:24:00'),
      done: 'false',
    },
    {
      id: uuidv4(),
      name: 'Task 3',
      date: new Date('2020-12-17T03:24:00'),
      done: 'false',
    }
  ]);

  const handleTaskNameChange = e => {
    setTaskName(e.target.value);
  };

  const removeTaskFromList = id => {
    setTaskList(taskList.filter(task => task.id !== id));
  }

  const submitToTaskList = e => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      name: taskName,
      date: new Date(),
      done: checked ? 'true' : 'false',
    };
    setTaskList(taskList.concat(newTask));
    setTaskName('');
    setChecked(false);
  };

  const handleStatusChange = (id) => {
    setTaskList(taskList.map(
      task => {
        if (task.id === id) {
          if (task.done === 'false') task.done = 'true';
          else task.done = 'false';
        }
        return task;
      }
    ));
  }

  const handleCheckboxChange = (e) => {
    if (e.target.checked) setChecked(true);
    else setChecked(false);
  };

  return (
    <Container>
      <Header
        header={"Simple ToDo App"}
        paragraph={"A Simple ToDo App to get things done :)."}/>
      <AddTask
        taskName={taskName}
        checkbox={checked}
        handleTaskNameChange={handleTaskNameChange}
        handleCheckboxChange={handleCheckboxChange}
        submitToTaskList={submitToTaskList}
      />
      <ShowTasks
        taskList={taskList}
        handleStatusChange={handleStatusChange}
        handleRemove={removeTaskFromList}/>
    </Container>
  );
}

export default App;
