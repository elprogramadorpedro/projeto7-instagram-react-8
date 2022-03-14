import reactDOM from "react-dom";
import Navbar from "./Navbar";
import Corpo from "./Corpo";
import FundoMobile from "./FundoMobile";

function App() {
  return (
    <>
      <Navbar />
      <Corpo />
      <FundoMobile />
    </>
  );
}

reactDOM.render(<App />, document.querySelector(".root"));
