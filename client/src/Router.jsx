import { Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
};