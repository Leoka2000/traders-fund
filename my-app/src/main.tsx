import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RoutesMain from './routes.tsx'
import './App.css'
import { Provider } from 'react-redux'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import { store } from './features/app/store.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<RoutesMain />} />
        </Routes>
      </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>,
)
