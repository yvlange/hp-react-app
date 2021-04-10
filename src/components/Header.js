import "./Header.css";
import rmicon from "../images/rmicon.svg";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className="header-component">
      <img className="logo" src={rmicon} alt="logo" />
      <Navigation />
    </div>
  );
}
