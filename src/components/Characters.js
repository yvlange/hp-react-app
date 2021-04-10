import "./Characters.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [filter, setFilter] = useState("all");
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacters((prevCharacters) => {
          return [...prevCharacters, ...data.results];
        });
        setTotalPages(data.info.pages);
      });
  }, [page]);

  function filterStatus(filterValueStatus) {
    if (filterValueStatus === "Alive") {
      setFilter("Alive");
    } else if (filterValueStatus === "Dead") {
      setFilter("Dead");
    } else if (filterValueStatus === "unknown") {
      setFilter("unknown");
    } else if (filterValueStatus === "all") {
      setFilter("all");
    }
  }

  function filterName(filterValueName) {
    setNameFilter(filterValueName);
  }

  function renderCharacters() {
    return characters
      .filter((character) => {
        return character.status === filter || filter === "all";
      })
      .filter((character) => {
        return (
          character.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
          nameFilter === ""
        );
      })
      .map((character) => {
        const { id, name, image, status } = character;

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
      });
  }

  function handleLoadMore() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  return (
    <div className="charactersContent">
      <Filter onFilterStatus={filterStatus} onFilterName={filterName} />
      <div className="charactersList">{renderCharacters()}</div>
      {page < totalPages && (
        <button className="loadMoreButton" onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
}
