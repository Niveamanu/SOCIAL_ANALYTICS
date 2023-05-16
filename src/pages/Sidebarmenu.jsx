import React from "react";
import { useGlobalContext } from "../GlobalContext/context";
import { NavLink } from "react-router-dom";
const Sidebarmenu = () => {
  const { uniqueStream, closeSidebar, setCurrentItem } = useGlobalContext();
  const handlePage = (items) => {
    closeSidebar();
    setCurrentItem(items);
  };
  return (
    <div className="sidebar-links">
      {uniqueStream.map((items, i) => {
        return (
          <NavLink
            to={`/${items}`}
            className="btn-sidebar"
            key={items}
            onClick={() => handlePage(items)}
          >
            {items}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebarmenu;
