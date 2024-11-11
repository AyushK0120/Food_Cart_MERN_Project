import './App.css';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  //npm i bootstrap-dark-5 boostrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Navbar from './components/Navbar';
import Login from './screens/Login';
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';
import Contact from './components/Contact.js';
import Thankyou from './components/Thankyou.js';
import Report from './components/Report.js';
import PayOnline from './components/PayOnline.js';


function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/myOrder" element={<MyOrder />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/report" element={<Report/>} /> 
            <Route path="/Thankyou" element={<Thankyou />} />
            <Route path="/PayOnline" element={<PayOnline />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
