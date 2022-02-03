import React from 'react';
// import App from "./App";
import Admin from "./Admin";
import Home from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return <div>
    <Router>
    


      <div>
        <Routes>

          <Route path="/admin" exact element={<Admin/>} />


          <Route path="/" element={<Home/>} />



        </Routes>
      </div>
    </Router>
  </div>;
}

export default App;
