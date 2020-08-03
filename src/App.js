import React,{useState} from "react";
import "./App.scss";
import Header from "./components/Header";
import Base from "./components/Base";
import Pxtorem from "./components/Pxtorem";
import Remtopx from "./components/Remtopx";
import Footer from "./components/Footer";

function App() {
  const [base,setBase] = useState(16)
  return (
    <div className="App">
      <div className="app-wrapper">
        <Header />
        <Base setBase={setBase} base={base}/>
        <Pxtorem base={base}/>
        <Remtopx base={base} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
