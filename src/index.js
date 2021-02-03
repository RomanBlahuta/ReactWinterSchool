import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './pages/DetailedCharacter';
import App from './pages/Home';
import reportWebVitals from './reportWebVitals';
import DetailedCharacter from './pages/DetailedCharacter';
import Router from './router';

ReactDOM.render(
    <React.StrictMode>
        <Router></Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
