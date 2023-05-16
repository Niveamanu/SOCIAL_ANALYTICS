import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import DynamicForm from "./Form";

const Sharedlayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
      <Sidebar />
    </>
  );
};

export default Sharedlayout;
