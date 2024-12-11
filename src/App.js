import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import BusinessLogin from "./BusinessLogin";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/business-login" element={<BusinessLogin />} />
    </Routes>
  </BrowserRouter>
);

export default App;
