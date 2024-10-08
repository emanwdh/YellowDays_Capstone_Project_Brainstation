import { useState } from "react";
import "./App.scss";
import Access from "./Components/Access/Access";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./Components/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Access />}></Route>
        <Route path={"/login"} element={<Access />}></Route>
        <Route path="/signup" element={<Access />}></Route>
        <Route path={"user/:username/:id/now"} element={<Main />}></Route>
        <Route path={"user/:username/:id/next"} element={<Main />}></Route>
        <Route path={"user/:username/:id/later"} element={<Main />}></Route>
        <Route path={"user/:username/:id/home"} element={<Main />}></Route>
        <Route path={"user/:username/:id/add"} element={<Main />}></Route>
        <Route
          path={"user/:username/:id/activity/:activity"}
          element={<Main />}
        ></Route>
        <Route
          path={"user/:username/:id/activity/:activity/edit"}
          element={<Main />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
