import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Feedbackfir from './Componants/Feedbackfir';
import Feedback from './Componants/Feedback';
import FeebackCard from './PoliceStation/FeebackCard';
import Feedbackfri from './PoliceStation/Feedbackfri';
import AddFir from './HighAuthority/AddFir';
import Updatefri from './PoliceStation/Updatefri';
import Seefir from './Componants/Seefir';
import Trackfir from './Componants/Trackfir';
import Chatbot from './Componants/Chatgrow';
import Chatgrow from './Componants/Chatgrow';
// import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
