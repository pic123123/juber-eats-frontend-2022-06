import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAccount from "../pages/create-account";
import Login from "../pages/login";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}
