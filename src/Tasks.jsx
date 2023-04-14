import React from 'react';
import Task from './Task';
import { useGlobalContext } from './Context';
import styled from 'styled-components';

const Tasks = () => {
  const {
    state: { tasks },
    clearTasks,
    inputRef,
  } = useGlobalContext();

  return (
    <section className='section'>
      <ul>
        {tasks.map((task) => {
          return <Task key={task.id} {...task} />;
        })}
      </ul>
      {tasks.length < 1 ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '50vh',
          }}
        >
          <h1>your tasklist is empty</h1>
          <Btn onClick={() => inputRef.current.focus()}>add task</Btn>
        </div>
      ) : (
        <button className='clear-btn' onClick={clearTasks}>
          clear tasks
        </button>
      )}
    </section>
  );
};

const Btn = styled.button`
  text-transform: capitalize;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  background: #2626fa;
  color: white;
  border-radius: 0.25rem;
  border: none;
`;
export default Tasks;
