import React from "react";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AnchorIcon from "@mui/icons-material/Anchor";

const Header = () => {
  return (
    <div className="head-comp">
      <div className="left-head">
        <AnchorIcon />
      </div>
      <div className="right-head">
        <SearchIcon />
        <MenuIcon />
      </div>
    </div>
  );
};

export default Header;
