import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import About from "./pages/About";
import ClientInfo from "./pages/Auth/ClientInfo";
import SellerInfo from "./pages/Auth/SellerInfo";
function Navigation() {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/signin");
  }, []);

  return null;
}

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/clientInfo" element={<ClientInfo />} />
        <Route path="/sellerInfo" element={<SellerInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
