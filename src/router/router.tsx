import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import EditUrl from "../pages/EditUrl";
import ListUrl from "../pages/ListUrl";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editurl" element={<EditUrl />} />
        <Route path="/listurl" element={<ListUrl />} />
      </Routes>
    </div>
  );
};

export default Router;
