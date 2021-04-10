import rickandmortywallpaper from "../images/rickandmortywallpaper.jpg";
import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <img className="wallpaper" src={rickandmortywallpaper} alt="wallpaper" />
    </div>
  );
}
