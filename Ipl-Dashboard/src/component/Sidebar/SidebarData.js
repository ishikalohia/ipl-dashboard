import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Seasons",
    path: "/Seasons",
    icon: <FaIcons.FaCalendar />,
    cName: "nav-text",
  },
  {
    title: "Results",
    path: "/results",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },

  {
    title: "Teams",
    path: "/team",
    icon: <FaIcons.FaUser />,
    cName: "nav-text",
  },
];
