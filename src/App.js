import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import SearchCustomers from "./containers/SearchCustomers";
import ManageCustomer from "./containers/ManageCustomer";

function App() {
  return (
    <div>
      <Sidebar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<ManageCustomer />} />
          <Route path="/view/:id" element={<ManageCustomer />} />
          <Route path="/customers" element={<SearchCustomers />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;