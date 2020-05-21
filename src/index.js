import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/fixedColumnsLayout/Bootstrap3';
// import App from './components/fixedColumnsLayout/Bootstrap4';
// import App from './components/fixedColumnsLayout/CssGrid';
// import App from './components/fixedColumnsLayout/CssGridAreas';
// import App from './components/responsiveColumnsLayout/Bootstrap4';
// import App from './components/responsiveColumnsLayout/CssGrid';
import App from './components/responsiveColumnsLayout/CssGridAutoFlow';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
