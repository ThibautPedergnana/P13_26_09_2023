import React from "react";
import { Home } from "./home/Home";
import Profil from "./profil/Profil";
import SignIn from "./signin/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/" element={<SignIn />} />
        <Route path="/profile/" element={<Profil />} />
      </Routes>
    </Router>
  );
}
