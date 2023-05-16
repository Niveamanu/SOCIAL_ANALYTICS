import React from "react";
import { Form, useNavigate } from "react-router-dom";
import Navlinks from "./Navlinks";
import { FaBars } from "react-icons/fa";
import { data } from "../data";
import { useGlobalContext } from "../GlobalContext/context";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  const uniqueStream = [];

  data.map((item) => {
    item.stream.map((stream) => {
      if (uniqueStream.indexOf(stream) === -1) {
        uniqueStream.push(stream);
      }
    });
  });

  return (
    <div>
      <nav>
        <div className="nav-center showNavBar">
          <h3 className="logo">Social Analytics</h3>

          <button className="toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
      </nav>
      <div className="jobs-center">
        <Navlinks uniqueStream={uniqueStream} />
      </div>
    </div>
  );
};

export default Navbar;
