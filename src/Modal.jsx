import React from 'react';
import { useGlobalContext } from './Context';
import styled from 'styled-components';

const Modal = () => {
  const {
    state: { singleTask },
    setEditTaskName,
    editTaskName,
    editTask,
  } = useGlobalContext();

  const { taskName, id } = singleTask;
  return (
    <ModalDiv>
      <h1>{taskName}</h1>
      <hr />
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor='old-task'>Old Task Name : </label>
          <input
            type='text'
            value={taskName}
            disabled
            onChange={(e) => setEditTaskName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='new-task'>New Task Name: </label>
          <input
            type='text'
            value={editTaskName}
            onChange={(e) => setEditTaskName(e.target.value)}
          />
        </div>
        <button onClick={() => editTask(id, editTaskName)}>Edit Task</button>
      </form>
    </ModalDiv>
  );
};

const ModalDiv = styled.div`
  width: 500px;
  height: 300px;
  border: none;
  background: white;
  border-radius: 0.25rem;
  padding: 1rem;
  text-align: center;

  form {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }
  input[type='text'] {
    height: 48px;
    font-size: 1rem;
    padding-left: 1rem;
  }
  button {
    padding: 0.75rem 2rem;
    border: none;
    background: blue;
    border-radius: 0.25rem;
    color: white;
    font-weight: 700;
    font-size: 1rem;
  }
`;
export default Modal;
