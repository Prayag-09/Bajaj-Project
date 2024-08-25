import { useState } from 'react';
import JSONInput from './components/JSONInput';
import MultiSelectDropdown from './components/MultiSelectDropdown';
import FilteredResponse from './components/FilteredRes';

const App = () => {
  const [data, setData] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);

  return (
    <div>
      <JSONInput setData={setData} />
      {data && <MultiSelectDropdown setSelectedFilters={setSelectedFilters} />}
      {data && selectedFilters.length > 0 && (
        <FilteredResponse data={data} selectedFilters={selectedFilters} />
      )}
    </div>
  );
};

export default App;
