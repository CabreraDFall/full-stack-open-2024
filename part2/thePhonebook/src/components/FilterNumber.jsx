const FilterNumber = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <p>
        filter shown with
        <input type="text" value={filter} onChange={handleFilterChange} />
      </p>
    </div>
  );
};

export default FilterNumber;
