import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { Inventory, MainPage, Manage, SignIn } from "./pages";

const App: any = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
