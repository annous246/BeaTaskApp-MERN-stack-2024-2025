import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from "./login.jsx"
import MainApp from "./MainApp.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp/>
  </React.StrictMode>,
)