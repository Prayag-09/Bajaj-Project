/* eslint-disable react/prop-types */
import Select from 'react-select';

const MultiSelectDropdown = ({ setSelectedFilters }) => {
  const options = [
    { value: 'alphabets', label: 'Alphabets' },
    { value: 'numbers', label: 'Numbers' },
    { value: 'highestLower', label: 'Highest lowercase alphabet' },
  ];

  return (
    <Select
      isMulti
      options={options}
      onChange={(selected) => setSelectedFilters(selected.map(option => option.value))}
    />
  );
};

export default MultiSelectDropdown;
