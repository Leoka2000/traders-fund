import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
// import Login from './features/auth/Login'
import Welcome from './features/auth/Welcome'
import RequireAuth from './features/auth/RequireAuth'
// import UsersList from './features/users/usersList'

import './index.css'

import IndexFunded from './pages/dashboard/funded/wrapper/wrapper'
import IndexEvaluation from './pages/dashboard/evaluation/wrapper/wrapper'
import IndexWithdraw from './pages/dashboard/withdraw/wrapper/wrapper'

import WrapperCreateAcount from './pages/dashboard/createAccount/wrapper/wrapper'

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>

      <Route index element={<IndexEvaluation/>} />
        {/* public routes */}
        <Route path='funded-training' element ={<IndexFunded/>} />
        <Route path='withdraw' element ={<IndexWithdraw/>} />
        <Route path='create-account' element ={<WrapperCreateAcount/>} />
        <Route element={<Public />} />
        {/* <Route path="login" element={<Login />} /> */}
        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="welcome" element={<Welcome />} />
          {/* <Route path="userslist" element={<UsersList />} /> */}
        </Route>
      </Route>
    </Routes>
  )
}

export default App;