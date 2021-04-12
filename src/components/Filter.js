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
    <form onSubmit={handleFilterName} className="filterForm">
      <label className="nameLabel">Name:</label>
      <input
        className="searchByName"
        name="charactername"
        id="charactername"
        type="text"
        placeholder="search by name"
      />
      <button type="submit" className="nameButton">
        Go
      </button>

      <label className="statusLabel">Status:</label>
      <select onClick={handleFilterStatus} name="status" id="status">
        <option value="all">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </form>
  );
}
