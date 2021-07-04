import React from 'react';
import ReactDOM from 'react-dom';
import main from './assets/css/index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div className={main.body}>
      <App />
    </div>
      
  </React.StrictMode>,
  document.getElementById('root')
);

