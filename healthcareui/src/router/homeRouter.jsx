import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/protected/Dashboard";

export default function HomeRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}
