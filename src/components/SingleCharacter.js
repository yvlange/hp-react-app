import "./SingleCharacter.css";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import GoBackHome from "./GoBackHome";

export default function SingleCharacter({ name }) {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const history = useHistory();

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
      });
  }, [id]);

  return (
    <div className="singleCharacterContent">
      <div className="singleCharacterInfo">
        <img className="singleCharacterPic" src={character.image} alt={name} />
        <h2>{character.name}</h2>
        <ul className="singleCharacterDetails">
          <li>Status: {character.status}</li>
          <li>Species: {character.species}</li>
        </ul>
      </div>
      <button onClick={() => history.goBack()}>Back</button>
      <GoBackHome text="Home" />
    </div>
  );
}
