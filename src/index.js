import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/_base.css';
import { FlexContainer } from './styles/';

ReactDOM.render(
  <React.StrictMode>
    <FlexContainer>
      <App />
    </FlexContainer>
  </React.StrictMode>,
  document.getElementById('root')
);
