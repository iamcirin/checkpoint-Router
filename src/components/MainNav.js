import React from "react";
import { MdManageSearch } from "react-icons/md";
import { SiTrendmicro } from "react-icons/si";
import { MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <div className="bottomNavBar">
      <Link to="/favories">
        <MdOutlineFavorite className="icons" />
      </Link>
      <Link to="/trending">
        <SiTrendmicro className="icons" />
      </Link>
      <Link to="/search">
        <MdManageSearch className="icons" />
      </Link>
    </div>
  );
};

export default MainNav;
