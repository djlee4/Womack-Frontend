import React from "react";
import { Inventory, Manage, MainPage, Sign } from "./pages";
import { Navbar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { render } from "@testing-library/react";

const App: any = () => {
  render
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/signin" element={<Sign />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
};
export default App;
