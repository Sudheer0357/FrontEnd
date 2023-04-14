import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';

import reducer from './reducer';

import {
  CLEAR_TASKS,
  ADD_TASK,
  REMOVE_TASK,
  EDIT_TASK,
  COMPLETED_TASK,
  OPEN_MODAL,
  ALERT_MSG,
} from './actions';

const AppContext = createContext(null);

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  alert: {
    show: false,
    msg: '',
    type: '',
  },
  isModalOpen: false,
  singleTask: {},
};
const AppProvider = ({ children }) => {
  const [task, setTask] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef(null);
  const [editTaskName, setEditTaskName] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  }, [state]);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({
        type: ALERT_MSG,
        payload: { show: false, msg: '', type: '' },
      });
    }, 2000);
    return () => clearTimeout(timer);
  }, [state.alert.show]);

  const addTask = (e) => {
    e.preventDefault();
    if (task) {
      const newTask = {
        id:
          state.tasks.length < 1
            ? 1
            : state.tasks[state.tasks.length - 1].id + 1,
        taskName: task,
        completed: false,
      };
      dispatch({ type: ADD_TASK, payload: newTask });
      setTask('');
      dispatch({
        type: ALERT_MSG,
        payload: { show: true, msg: 'task added', type: 'success' },
      });
    } else {
      dispatch({
        type: ALERT_MSG,
        payload: { show: true, msg: 'Please provide task', type: 'reject' },
      });
    }
  };

  const removeTask = (id) => {
    dispatch({ type: REMOVE_TASK, payload: id });
    dispatch({
      type: ALERT_MSG,
      payload: { show: true, msg: 'task removed', type: 'reject' },
    });
  };

  const openModal = (id) => {
    dispatch({ type: OPEN_MODAL, payload: id });
  };
  const editTask = (id, name) => {
    dispatch({ type: EDIT_TASK, payload: { id, name } });
    setEditTaskName('');
    dispatch({
      type: ALERT_MSG,
      payload: { show: true, msg: 'task edited', type: 'success' },
    });
  };

  const completedTask = (id) => {
    dispatch({ type: COMPLETED_TASK, payload: id });
  };

  const clearTasks = () => {
    dispatch({ type: CLEAR_TASKS });
    dispatch({
      type: ALERT_MSG,
      payload: { show: true, msg: 'All tasks are cleared', type: 'reject' },
    });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        removeTask,
        editTask,
        completedTask,
        task,
        setTask,
        addTask,
        clearTasks,
        inputRef,
        setEditTaskName,
        editTaskName,
        openModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
export { AppProvider, AppContext };
