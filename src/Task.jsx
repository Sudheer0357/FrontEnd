import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from './Context';
import { BsCheckCircle } from 'react-icons/bs';

const Task = ({ id, taskName, completed }) => {
  const { removeTask, completedTask, openModal } = useGlobalContext();
  return (
    <Wrapper>
      <div className='tasklist'>
        <div
          className='title'
          style={{ color: `${completed ? 'green' : null}` }}
        >
          {completed && <BsCheckCircle />}
          <p className={`${completed ? 'title completed' : 'title'}`}>
            {taskName}
          </p>
        </div>
        <div>
          <button className='edit' onClick={() => openModal(id)}>
            edit
          </button>
          <button className='done' onClick={() => completedTask(id)}>
            done
          </button>
          <button className='remove' onClick={() => removeTask(id)}>
            remove
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  width: 85vw;
  max-width: 600px;
  background: white;
  margin: 1.5rem;
  padding: 1rem;
  letter-spacing: 0.25rem;
  transition: all 1s ease;

  :hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .tasklist {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    font-size: 1.2rem;
  }
  .completed {
    text-decoration: line-through;
  }

  div {
    display: flex;
    gap: 1rem;

    button {
      font-size: 15px;
      letter-spacing: 2px;
      background: none;
      border: none;
    }
    .edit {
      color: blue;
    }
    .done {
      color: green;
    }
    .remove {
      color: red;
    }
  }
`;
export default Task;
