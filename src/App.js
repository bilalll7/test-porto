import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homes from "./pages/Homes";
import Abouts from "./pages/Abouts";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route exact path="/" element={<Homes />}></Route>
          <Route path="/about" element={<Abouts />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/service" element={<Services />}></Route>
          <Route path="/contact" element={<Contacts />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
