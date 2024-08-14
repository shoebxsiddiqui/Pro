import { useEffect } from "react";
import Header from "./Components/Header/Header.js";
import Body from "./Components/Body/Body.js";
import WebFont from "webfontloader";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <div className="bg-gray-200">
      <Header />
      <Body />
    </div>
  );
}

export default App;
