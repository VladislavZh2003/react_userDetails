import React from "react";
import S from "./Nav.module.css";

const Nav = () => {
  return (
    <nav>
      <ul className={S.nav}>
        <li><a href="https://jsonplaceholder.typicode.com/users">API</a></li>
        <li><a href="/">refresh</a></li>
      </ul>
      
    </nav>
    
  );
};

export default Nav;
