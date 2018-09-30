import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from './app.jsx';

const init = () => {
  window.onload = () => {
    ReactDOM.render(
      <ToDoApp />,
      document.getElementById('AppContainer'),
    );
  };
};

init();
