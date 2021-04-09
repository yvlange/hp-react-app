import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import SingleCharacter from "./SingleCharacter";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const url = "http://hp-api.herokuapp.com/api/characters";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacters((prevCharacters) => {
          return [...prevCharacters, ...data];
        });
        setTotalPages(data.total_pages);
      });
  }, [page]);

  function renderCharacters() {
    return characters.map((character) => {
      const { id, name } = character;
      const split = name.split(" ");
      const join = split.join("");
      const characterLink = join.toLowerCase();

      return (
        <li key={id}>
          <Link to={`/characters/${characterLink}`}>{name} </Link>
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
    <div>
      <h2>Here are the stars:</h2>
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
