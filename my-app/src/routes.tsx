import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App';
import Sidenav from './components/sidenav/sidenav';
import SignIn from './pages/sign-in';



function RoutesMain() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/app' element={<App />} />
          <Route path='/' element={<Sidenav />} />
          <Route path ='/sign-in' element={ <SignIn/> } />
        </Routes>
      </Router>
    </>
  );
}

export default RoutesMain;