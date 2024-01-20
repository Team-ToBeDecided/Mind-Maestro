import { Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
        </Routes>
    )
};