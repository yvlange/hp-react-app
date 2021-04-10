import "./Characters.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import SingleCharacter from "./SingleCharacter";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character/?page=${page}";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacters((prevCharacters) => {
          return [...prevCharacters, ...data.results];
        });
        console.log(data);
        setTotalPages(data.totalPages);
      });
  }, [page]);

  function renderCharacters() {
    return characters.map((character) => {
      const { id, name, image } = character;

      return (
        <li key={id} className="characterBox">
          <Link to={`/characters/${id}`}>
            <img className="avatar" src={image} alt={name} />
            <p className="characterName">{name} </p>
          </Link>
        </li>
      );
    });
  }

  function handleLoadMore() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }
  return (
    <div className="charactersContent">
      <h2>All Characters</h2>
      <div className="charactersList">{renderCharacters()}</div>
      {page < totalPages && <button onClick={handleLoadMore}>Load more</button>}
    </div>
  );
}
// <SingleCharacter
//   key={character.id}
//   name={character.name}
//   species={character.species}
//   house={character.house}
//   patronus={character.patronus}
//   wand={character.wand}
//   pictureURL={character.image}
// />
