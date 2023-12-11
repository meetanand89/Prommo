import { Routes, Route } from "react-router-dom";
import Login from "../src/components/auth/Login";
import Home from "../src/components/pages/Home";
import Profile from "../src/components/pages/Profile";
export default function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element></Route>
            </Routes>
        </>
    );
}
