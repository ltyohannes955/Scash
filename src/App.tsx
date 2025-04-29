import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home";
import Landing from "./pages/landing";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}
