import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Router, Routes, Switch } from "react-router-dom";
import Result from "./result";
import Result2 from "./resultmap";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Result />} />
        <Route path="/result2" element={<Result2 />} />
      </Routes>
    </BrowserRouter>
  </>
);
