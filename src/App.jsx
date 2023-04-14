import React from 'react';
import Form from './Form';
import Tasks from './Tasks';
import Modal from './Modal';
import { useGlobalContext } from './Context';

const App = () => {
  const { state } = useGlobalContext();
  return (
    <>
      <main>
        <Form />
        <Tasks />
      </main>
      {state.isModalOpen && (
        <div className='modal'>
          <Modal />
        </div>
      )}
    </>
  );
};

export default App;
