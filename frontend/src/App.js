import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home/Home";
import AdminHome from "./components/Home/AdminHome";
import Inventory from "./components/Logistics/Inventory";
import Create from "./components/Logistics/Create";
import Edit from "./components/Logistics/Edit";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <br/>
          <Header />
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<AdminHome />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
        <div>
          <br />
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
