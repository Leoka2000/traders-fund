import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login'
import Welcome from './features/auth/Welcome'
import RequireAuth from './features/auth/RequireAuth'
import UsersList from './features/users/usersList'
import Dashboard from './components/sidenav/sidenav'
import './index.css'
import PrimarySearchAppBar from './components/newDrawer/newDrawer'

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard/>} />
        {/* public routes */}
        <Route element={<Public />} />
        <Route path="login" element={<Login />} />
        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="userslist" element={<UsersList />} />
        </Route>

      </Route>
    </Routes>
  )
}

export default App;