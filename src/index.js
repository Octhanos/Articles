import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBvLbNTY3KD2fc6xXwPD-sfaPwCTKjffrI",
  authDomain: "my-react-blog-af39a.firebaseapp.com",
  projectId: "my-react-blog-af39a",
  storageBucket: "my-react-blog-af39a.appspot.com",
  messagingSenderId: "581342039976",
  appId: "1:581342039976:web:f11fbb2ebe1d1e50be179d"
};

const app = initializeApp(firebaseConfig);

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
