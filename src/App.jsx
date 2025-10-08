import Header from "./components/Header/Header";
import SectionProd from "./components/SectionProd/SectionProd";

import "./App.css";
function App(props) {
  
  return (
    <div>
      <div className="layout">
        <Header />
        <SectionProd products={props.products} />
      </div>
    </div>
  );
}

export default App;
