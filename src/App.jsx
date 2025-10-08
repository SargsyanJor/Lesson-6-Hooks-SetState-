import Header from "./components/Header/Header";
import SectionProd from "./components/SectionProd/SectionProd";
import SectioBag from "./components/SectionBag/SectionBag";

import "./App.css";
function App(props) {
  
  return (
    <div>
      <div className="layout">
        <Header />
        <SectionProd products={props.products} />
        <SectioBag/>
      </div>
    </div>
  );
}

export default App;
