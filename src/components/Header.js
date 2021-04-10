import "./Header.css";
import rickandmortylogo from "../images/rickandmortylogo.svg";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className="header-component">
      <img className="logo" src={rickandmortylogo} alt="logo" />
      <Navigation />
    </div>
  );
}
