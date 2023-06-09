import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Browse from "./pages/Browse";
import Create from "./pages/Create";
import ErrorPage from "./pages/ErrorPage";
import AdminPage from "./pages/AdminPage";

import AdvertDetails from "./pages/AdvertDetails";
import Welcome from "./pages/Welcome";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        ></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/create" element={<Create />}></Route>

        <Route
          path="/admin"
          element={
            user && user.role === "ADMIN" ? <AdminPage /> : <Navigate to="/" />
          }
        ></Route>
        <Route path="/browse/:id" element={<AdvertDetails />} />
        <Route path="/profilepage/:id" element={<ProfilePage />} />
        <Route path="/*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
