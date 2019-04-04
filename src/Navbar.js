import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <ul>
    <li>
      <Link to="/clients">Clients</Link>
    </li>
    <li>
      <Link to="/something">Something</Link>
    </li>
  </ul>
);

export default Navbar;
