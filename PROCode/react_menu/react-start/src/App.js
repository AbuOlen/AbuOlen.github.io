import React from "react";
import Menu from "./components/Menu";
import "./App.css";

function App() {

  const subMenu1 = [
    {name: 'menu11', url:'./'},
    {name: 'menu12', url:'./'},
    {name: 'menu13', url:'./'},
  ];
  
  const subMenu2 = [
    {name: 'menu11', url:'./'},
    {name: 'menu22', url:'./'},
    {name: 'menu23', url:'./'},
  ];
  
  const subMenu3 = [
    {name: 'menu31', url:'./'},
    {name: 'menu32', url:'./'},
    {name: 'menu33', url:'./'},
  ];
  
  const menuContent = [
    {name: 'item1', menu : subMenu1},
    {name: 'item2', menu : subMenu2},
    {name: 'item3', menu : subMenu3},
  ];

  return (
    <div className="header">
       <Menu content={ menuContent } />
      
    </div>
  );
};

export default App;
