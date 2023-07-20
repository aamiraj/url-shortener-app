import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import EditUrl from "../pages/EditUrl";
import ListUrl from "../pages/ListUrl";
import Layout from "../layout/Layout";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/editurl" element={<EditUrl />} />
          <Route path="/listurl" element={<ListUrl />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
