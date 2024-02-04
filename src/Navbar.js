import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/addblog">AddBlog</a>
        </li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
