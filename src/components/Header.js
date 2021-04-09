import "./Header.css";
import hpLogo from "../images/hpLogo.png";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className="header-component">
      <img className="logo" src={hpLogo} alt="logo" />
      {/* <h1>Harry Potter</h1> */}
      <Navigation />
    </div>
  );
}
