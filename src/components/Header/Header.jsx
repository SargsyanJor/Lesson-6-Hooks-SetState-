import React, { useState } from "react";

import Burger from "./Burger/Burger";
import { FaHome } from "react-icons/fa";
import { CiShop } from "react-icons/ci";

import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <header>
        <div className="container">
          <div className={isOpen ? "headerMod" : "headerModal"} id="header">
            <li>
              <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
            </li>
            <li>
              <FaHome />
            </li>
            <li>
              <CiShop />
            </li>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
