import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RoutesMain from './routes.tsx'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './routes.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
  </React.StrictMode>
)


