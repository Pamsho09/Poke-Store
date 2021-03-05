import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/App';

import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  * {
margin: 0;
padding: 0;
font-family:Roboto;
 }
 body{
  background-color: #FFF;

 }
 @font-face {
  font-family: "Pixelmania";
  src: local("Pixelmania"),
  url("./assets/fonts/Pixelmania.ttf") format("truetype");
  font-weight: normal;
}
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
