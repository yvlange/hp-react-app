import { useHistory } from "react-router-dom";
import "./GoBackHome.css";
export default function GoBackHome({ text }) {
  const history = useHistory();

  function handleClickHome() {
    history.push("/");
  }
  return (
    <button className="goHomeBtn" onClick={handleClickHome}>
      {text}
    </button>
  );
}
