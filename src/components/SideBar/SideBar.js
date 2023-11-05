import React from "react";
import avatar from "../../images/Avatar.svg";
import "./SideBar.css";
import { userName } from "../../utils/constants";

const SideBar = () => {
  return (
    <div className="sidebar">
      <img alt={userName} src={avatar} className="sidebar__avatar-picture" />
      <p className="sidebar__avatar-name">{userName}</p>
    </div>
  );
};

export default SideBar;
