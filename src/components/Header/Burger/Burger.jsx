import { CiMenuBurger } from "react-icons/ci";
import { FaRegWindowClose } from "react-icons/fa";

import "./Burger.css";

function Burger({ isOpen, setIsOpen }) {
  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CiMenuBurger /> : <FaRegWindowClose />}
      </div>
    </>
  );
}
export default Burger;
