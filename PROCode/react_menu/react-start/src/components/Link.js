import React from "react";

const Link = (props) => {
 return   <div className="item" key={ props.url }>
  <a href = {props.url }> {props.name} </a>
  </div>
};

export default Link;