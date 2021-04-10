import "./Filter.css";

export default function Filter({ onFilterStatus, onFilterName }) {
  function handleFilterStatus(event) {
    const filterValueStatus = event.target.value;
    onFilterStatus(filterValueStatus);
  }

  function handleFilterName(event) {
    event.preventDefault();
    const filterValueName = event.target.charactername.value;
    onFilterName(filterValueName);
  }

  return (
    <div className="search">
      <form onSubmit={handleFilterName} className="filterForm">
        <label className="nameLabel">Name:</label>
        <input
          className="characterName"
          name="charactername"
          id="charactername"
          type="text"
          placeholder="search by name"
        />
        <button type="submit" className="nameButton">
          Search
        </button>

        <label className="statusLabel">Status:</label>
        <select onClick={handleFilterStatus} name="status" id="status">
          <option value="all">All</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </form>
    </div>
  );
}
