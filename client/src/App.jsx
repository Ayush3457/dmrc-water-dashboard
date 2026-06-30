import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Stations from "./pages/Stations";
import Borewells from "./pages/Borewells";
import Analytics from "./pages/Analytics";
import RWH from "./pages/RWH";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <div className="flex-1 p-8 bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/stations" element={<Stations />} />
            <Route path="/borewells" element={<Borewells />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/rwh" element={<RWH />} />
          </Routes>
          <footer className="text-center text-gray-500 mt-8">
            DMRC Water Asset Management Dashboard
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;