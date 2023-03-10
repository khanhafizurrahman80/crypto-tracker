import SideBar from "./components/SideBar/SideBar";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";

function App() {
  return (
    <>
      <Router>
        <div className="flex">
          <SideBar />
          <div className="flex-1 w-[85vw]">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/file-manager" element={<FileManager />} />
              <Route path="/order" element={<Order />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/settings" element={<Setting />} />

              <Route path="*" element={<> not found</>} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
