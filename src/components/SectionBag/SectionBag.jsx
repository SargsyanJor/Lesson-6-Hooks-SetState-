import "./SectionBag.css"


import { CiMenuBurger } from "react-icons/ci";
import { FaRegWindowClose } from "react-icons/fa";
import { CiShop } from "react-icons/ci";

function SectioBag() {
    return <>
    <section className="sectionBag">
        <div className="bag">
            <CiMenuBurger/>
            <div className="bagItems">
                <div className="items"></div>
                <div className="items"></div>
                <div className="items"></div>
                <div className="items"></div>
                <div className="items"></div>
                <div className="items"></div>
            </div>
            <CiShop/>
        </div>
    </section>
    </>
}

export default SectioBag