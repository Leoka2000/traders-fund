import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RoutesMain from './routes.tsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RoutesMain />
  </React.StrictMode>,
)
