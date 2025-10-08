import "./SectionProd.css";
import { IoBagAddSharp } from "react-icons/io5";

function SectionProd(props) {
  console.log(props);

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
                    <li>
                      <IoBagAddSharp className="addProd" />
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
