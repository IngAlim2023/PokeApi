import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrimerPag } from "./pages/PrimerPag";
import { User } from "./pages/User";
import { Navigation } from "./pages/Navigation";
import {Inicio} from "./pages/Inicio";
import { PruebaUsers } from "./pages/PruebaUsers";


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/"element={<Inicio />}/>
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<PrimerPag />} />
        <Route path="/users" element={<PruebaUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
