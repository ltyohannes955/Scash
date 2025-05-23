import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Signup from "./pages/signup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
