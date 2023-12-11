import logo from "./logo.svg";
import { BrowserRouter } from "react-router-dom";
// import Router from "./Router";
// import store from "./redux/store";

import Login from "../src/components/auth/Login";

function App() {
    return (
        <div className="App">
            <h6>Route</h6>
            <Login />
        </div>
    );
}

export default App;
