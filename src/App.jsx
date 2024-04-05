import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Result from "./pages/Result";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play/:category/:difficulty" element={<Game />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
};

export default App;
