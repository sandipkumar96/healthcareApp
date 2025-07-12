import { Routes, Route } from "react-router-dom";
import Login from "../components/auth/Login";

export default function AuthRouter() {
  console.log("ko");
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
      <Login />
    </>
  );
}
