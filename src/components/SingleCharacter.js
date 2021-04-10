import "./SingleCharacter.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleCharacter({ name }) {
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
    <div className="singleCharacterInfo">
      <img className="singleCharacterPic" src={character.image} alt={name} />
      <h2>{character.name}</h2>
      <ul className="singleCharacterDetails">
        <li>Status: {character.status}</li>
        <li>Species: {character.species}</li>
      </ul>
    </div>
  );
}
