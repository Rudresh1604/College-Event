import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import CSIEvent from "./Pages/Clubs/CSIEvent";
import CodersEvent from "./Pages/Clubs/CodersEvent";
import CsiAdmin from "./Pages/Admin/CsiAdmin";
import CodersAdmin from "./Pages/Admin/CodersAdmin";
import MainAdmin from "./Pages/Admin/MainAdmin";
import { useSelector } from "react-redux";
import Loader from "./Components/Loader";
import Footer from "./Components/Footer";
import Login from "./Pages/Admin/Login";
import Register from "./Pages/Admin/Register";
function App() {
  const { loading } = useSelector((state) => state.root);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/admin-register" element={<Register />} />
            <Route path="/admin-login" element={<Login />} />
            <Route path="/csi-register" element={<CSIEvent />} />
            <Route path="/coders-register" element={<CodersEvent />} />
            <Route path="/admin/coders-admin" element={<CodersAdmin />} />
            <Route path="/admin/csi-admin" element={<CsiAdmin />} />
            <Route path="/admin/main-admin" element={<MainAdmin />} />
            <Route path="/loader" element={<Loader />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
