import { useState } from "react";
import "./App.scss";
import Login from "./Components/Login/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/login" element = {  <Login />} ></Route>
        <Route path ="/signup" element = {  <Login />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
