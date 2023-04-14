import React from 'react';
import { useGlobalContext } from './Context';
import Alert from './Alert';

const Form = () => {
  const { task, setTask, addTask, inputRef, state } = useGlobalContext();

  return (
    <>
      <form className='form-control' onSubmit={addTask}>
        <h1>Task Manager</h1>
        <div className='form-input'>
          <input
            type='text'
            name='task'
            id='task'
            ref={inputRef}
            value={task}
            placeholder='e.g. Do Homework...'
            onChange={(e) => setTask(e.target.value)}
          />
          <button className='btn' onClick={addTask}>
            Submit
          </button>
        </div>

        {state.alert.show && <Alert />}
      </form>
    </>
  );
};

export default Form;
