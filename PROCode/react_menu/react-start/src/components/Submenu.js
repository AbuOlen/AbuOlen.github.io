import React from "react";

const Submenu = (props) => {
 return   <div className="submenu" key={ props.name }>
     {props.name}
     <div className="link"> {props.menu}</div>
  
  </div>
};

export default Submenu;