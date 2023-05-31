import {
    BrowserRouter,
    Routes,
    Router,
    Route,
    Navigate,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Browse from "./pages/Browse";
import Create from "./pages/Create";

import AdminPage from "./pages/AdminPage";

import AdvertDetails from "./pages/AdvertDetails";
import Welcome from "./pages/Welcome";
import Wishlist from "./pages/Wishlist";

function App() {
    const {user} = useAuthContext();

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Welcome/>}></Route>
                <Route
                    path="/login"
                    element={!user ? <Login/> : <Navigate to="/"/>}
                ></Route>
                <Route
                    path="/register"
                    element={!user ? <Register/> : <Navigate to="/"/>}
                ></Route>
                <Route path="/browse" element={<Browse/>}></Route>
                <Route path="/create" element={<Create/>}></Route>
                <Route path="/wishlist" element={<Wishlist/>}></Route>
                <Route path="/admin"
                       element={(user && user.role === "ADMIN") ? <AdminPage/> : <Navigate to="/"/>}
                ></Route>
                <Route path="/browse/:id" element={<AdvertDetails/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
