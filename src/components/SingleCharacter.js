import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleCharacter({
  name,
  species,
  house,
  patronus,
  wand,
  pictureURL,
}) {
  const { characterLink } = useParams();
  const [character, setCharacter] = useState({});

  function renderSingleCharacter() {
    let id;
  }
  return (
    <div>
      {characterLink}
      <h2>{name}</h2>
      <ul>
        <li>{species}</li>
        <li>{house}</li>
        <li>{patronus}</li>
        <li>{wand}</li>
      </ul>
      <img src={pictureURL} alt={name} />
    </div>
  );
}
