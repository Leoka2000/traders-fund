import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from './pages/dashboard/welcome/index';
import App from './App';
import SidebarMain from './components/sidebar/sidebar';
import Navbar from './components/navbar/navbar';



function RoutesMain() {
  return (
    <>
      <Router>
        <Navbar/>
        <SidebarMain />
        <Routes>
          <Route path='/' element={<App />} />
        </Routes>
      </Router>
    </>
  );
}

export default RoutesMain;