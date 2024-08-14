import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from "./Components/SignUp"
import Login from "./Components/Login";
import Read from "./Components/Read";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Read" element={<Read />} />
          </Routes>
        </Router>  
      </div>
    </>
  )
}

export default App