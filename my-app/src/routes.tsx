import { Routes, Route } from 'react-router-dom'

// import Login from './features/auth/Login'

// import UsersList from './features/users/usersList'

import './index.css'

import IndexFunded from './pages/dashboard/funded/wrapper/wrapper'
import IndexEvaluation from './pages/dashboard/evaluation/wrapper/wrapper'
import IndexWithdraw from './pages/dashboard/withdraw/wrapper/wrapper'
import SignIn from './pages/login'
import SignUp from './pages/registration'
import IndexCreateAcount from './pages/dashboard/createAccount/wrapper/wrapper'


function App() {
  return (
    
    <Routes>
        <Route index path='funded-training' element ={<IndexFunded/>} />
        <Route path='withdraw' element ={<IndexWithdraw/>} />
        <Route path='create-account' element ={<IndexCreateAcount/>} />
        <Route path='evaluation' element ={<IndexEvaluation/>} />
        <Route path='login' element ={<SignIn/>} />
        <Route path='register' element ={<SignUp/>} />
    </Routes>
  )
}

export default App;