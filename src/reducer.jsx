import React from 'react';
import {
  CLEAR_TASKS,
  ADD_TASK,
  REMOVE_TASK,
  EDIT_TASK,
  COMPLETED_TASK,
  OPEN_MODAL,
  ALERT_MSG,
} from './actions';

const reducer = (state, action) => {
  if (action.type === ADD_TASK) {
    return { ...state, tasks: [...state.tasks, action.payload] };
  }

  if (action.type === CLEAR_TASKS) {
    return { ...state, tasks: [] };
  }

  if (action.type === REMOVE_TASK) {
    const tempTasks = state.tasks.filter((task) => task.id !== action.payload);
    return { ...state, tasks: tempTasks };
  }

  if (action.type === COMPLETED_TASK) {
    const tempTasks = state.tasks.map((task) => {
      if (task.id === action.payload) {
        let done = task.completed ? false : true;
        return { ...task, completed: done };
      }
      return task;
    });
    return { ...state, tasks: tempTasks };
  }
  if (action.type === OPEN_MODAL) {
    const tempTask = state.tasks.find((task) => task.id === action.payload);
    return { ...state, isModalOpen: true, singleTask: tempTask };
  }
  if (action.type === EDIT_TASK) {
    const { id, name } = action.payload;
    const tempTasks = state.tasks.map((task) => {
      if (task.id === id) {
        const { taskName } = task;
        task.taskName = name;
        if (name === '') {
          task.taskName = taskName;
        }
      }
      return task;
    });

    return { ...state, isModalOpen: false, tasks: tempTasks };
  }

  if (action.type === ALERT_MSG) {
    const { show, msg, type } = action.payload;
    return {
      ...state,
      alert: {
        show: show,
        msg: msg,
        type: type,
      },
    };
  }
  throw new Error(`No Matching Action Is Found`);
};

export default reducer;
