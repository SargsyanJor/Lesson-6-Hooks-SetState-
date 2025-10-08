import React, { useState } from "react";
import AddButton from "./AddButton/AddButton";


import "./SectionProd.css";

function SectionProd(props) {

  const [change, setChange] = useState(true)

  return (
    <>
      <section>
        <div className="container">
          <div className="sectionPord">
            {props.products.map((elm) => {
              return (
                <>
                  <div className="prodBoxs">
                    <li className="prodImg"><img src={elm.image} alt="" /></li>
                    <li><h1>{elm.category}</h1></li>
                    <li><p>{elm.title}</p></li>
                    <li><h2>$ {elm.price}</h2></li>
                    <li id="addProd">
                      <AddButton change={change} setChange={setChange} />
                    </li>
                  </div>

                </>

              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionProd;
