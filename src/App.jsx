import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";

function App() {
  return (
    <Router>
      <nav className="bg-red-500 h-fit text-white py-4">
        <div className="w-[90%] md:w-[80%] mx-auto">
          <h1 className="font-semibold text-2xl text-center">Supa Smoothies</h1>
          <div className="flex gap-6 justify-center my-3 text-lg">
            <Link to="/" className="hover:text-yellow-400 ">
              Home
            </Link>
            <Link to="/create" className="hover:text-yellow-400">
              Create New Smoothie
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/:id" element={<Update />}/>
      </Routes>
    </Router>
  );
}

export default App;
