import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddNewBookScreen from "./Screens/AddNewBookScreen/AddNewBookScreen"
import "./app.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AddNewBookScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
