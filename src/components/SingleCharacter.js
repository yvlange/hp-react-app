import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleCharacter({ name, image, status, species }) {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
      });
  }, [id]);

  return (
    <div>
      <h2>{character.name}</h2>
      <img src={character.image} alt={name} />
      <li>{character.status}</li>
      <li>{character.species}</li>
    </div>
  );
}
