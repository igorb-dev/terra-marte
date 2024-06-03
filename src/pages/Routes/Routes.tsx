import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Address from "../Address/Address";
import Register from "../Register/Register";

const RoutesPage = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/List" element={<Address />} />
        <Route path="/Register" element={<Register />} />
    </Routes>
  )
}

export default RoutesPage