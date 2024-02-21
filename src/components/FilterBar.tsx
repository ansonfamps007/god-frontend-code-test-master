import React from 'react';

interface FilterBarProps {
  bodyTypes: string[];
  selectedBodyType: string;
  onChange: (selectedType: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ bodyTypes, selectedBodyType, onChange }) => {
  const handleBodyTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = event.target.value;
    onChange(selectedType);
  };

  return (
    <div className="filter-bar">
      <select
        value={selectedBodyType}
        onChange={handleBodyTypeChange}
      >
        <option value="">Select Body Type</option>
        {bodyTypes.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
