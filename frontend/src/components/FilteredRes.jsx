/* eslint-disable react/prop-types */

const FilteredResponse = ({ data, selectedFilters }) => {
  const filterData = () => {
    return data.filter(item => {
      if (selectedFilters.includes('alphabets') && /[a-zA-Z]/.test(item)) return true;
      if (selectedFilters.includes('numbers') && /\d/.test(item)) return true;
      if (selectedFilters.includes('highestLower')) {
        return item === Math.max(...data.filter(i => /[a-z]/.test(i)).map(i => i.charCodeAt(0)));
      }
      return false;
    });
  };

  return (
    <div>
      <h3>Filtered Response:</h3>
      <p>{filterData().join(', ')}</p>
    </div>
  );
};

export default FilteredResponse;
