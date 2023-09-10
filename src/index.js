import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

axios.defaults.baseURL = 'https://mern-test-lwnn.onrender.com/api';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/mern_test_front/">
    <App />
  </BrowserRouter>
);
