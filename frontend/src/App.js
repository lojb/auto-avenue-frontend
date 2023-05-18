import {
  BrowserRouter,
  Routes,
  Router,
  Route,
  Navigate,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Browse from "./pages/Browse";
import Create from "./pages/Create";

import AdminPage from "./pages/AdminPage";

import AdvertDetails from "./pages/AdvertDetails";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/create" element={<Create />}></Route>

        <Route path="/admin" element={<AdminPage />}></Route>
        <Route path="/browse/:id" element={<AdvertDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
