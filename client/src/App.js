import "./App.css";
import Home from "./Components/Home";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
