import React from "react";
import Link from "./Link";
import Submenu from "./Submenu";
import "./panel.css"


const Menu = ({ content }) => {
  console.log('comtent',content);
  const menuLink = content.map(el => {
    const submenu = el.menu.map(link => {
      return <Link name = {link.name} url = {link.url} />
    })
    return <Submenu name = {el.name} menu={submenu} />
  });
  console.log('>>>',menuLink);
  return <div>
    { menuLink}
  </div>
};

export default Menu;
