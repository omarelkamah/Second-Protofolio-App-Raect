import { useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className="App" style={{background: dark && "#222", color: dark && "#fff"}}>
      <Toggle setDark={setDark} dark={dark} />
      <Intro dark={dark} />
      <About dark={dark}  />
      <ProductList dark={dark}  />
      <Contact dark={dark}  />
    </div>
  );
}

export default App;
