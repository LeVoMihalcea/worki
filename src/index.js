import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Typography} from "@material-ui/core";

ReactDOM.render(
  <React.StrictMode>
      <Typography>
        <App />
      </Typography>
  </React.StrictMode>,
  document.getElementById('root')
);
