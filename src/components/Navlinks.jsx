import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../GlobalContext/context";
import { useParams } from "react-router-dom";
const Navlinks = () => {
  const { currentItem, setCurrentItem, uniqueStream } = useGlobalContext();
  const handleSubmit = (item) => {
    setCurrentItem(item);
  };

  return (
    <div className="btn-container">
      {uniqueStream.map((item, index) => {
        return (
          <NavLink
            to={`/${item}`}
            key={index}
            className={({ isActive }) =>
              isActive ? "job-btn active-btn" : "job-btn"
            }
            onClick={() => handleSubmit(item)}
          >
            {item}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navlinks;
