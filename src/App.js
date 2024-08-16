import { useEffect } from "react";
import Header from "./Components/Header/Header.js";
import Body from "./Components/Body/Body.js";
import WebFont from "webfontloader";
import Categories from "./Components/Header/Categories.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart.js";
import Footer from "./Components/Footer/Footer.js";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <Router>
      <div className="bg-gray-200 !min-w-[1080px]">
        <Header />
        <Categories />
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
