import { Link } from "react-router-dom";

export default function CharacterCards({ name, image, id, status }) {
  return (
    <div key={id} className={`characterItem ${status}`}>
      <Link to={`/characters/${id}`}>
        <div className="characterItemCard">
          <img className="avatar" src={image} alt={name} />
          <p className="characterName">{name} </p>
        </div>
      </Link>
    </div>
  );
}
