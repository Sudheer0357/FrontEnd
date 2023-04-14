import React from 'react';
import { useGlobalContext } from './Context';

const Alert = () => {
  const { state } = useGlobalContext();
  const {
    alert: { msg, type },
  } = state;

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
