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

  useEffect(() => {
    const url = `http://hp-api.herokuapp.com/api/characters/${characterLink}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data.data);
      });
  }, [characterLink]);

  return (
    <div>
      {characterLink}
      <h2>{character.name}</h2>
      <ul>
        <li>{character.species}</li>
        <li>{character.house}</li>
        <li>{character.patronus}</li>
        <li>{character.wand}</li>
      </ul>
      <img src={character.pictureURL} alt={name} />
    </div>
  );
}
