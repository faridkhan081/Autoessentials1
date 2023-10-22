import React, { useState } from 'react';

function SortBy({ onSortChange }) {
  const [sortValue, setSortValue] = useState(''); // Initialize to an empty string

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSortValue(selectedValue);
    onSortChange(selectedValue);
  };

  return (
    <div className='flex items-center justify-end'>
      <div className="800px:mr-[67px] mr-[25px] mb-5">
        <label> Filter Products:</label>
        <select value={sortValue} onChange={(e) => handleChange(e)} className="rounded ml-2 p-2">
          <option value='' disabled>Recently Added</option> {/* Set value to an empty string */}
          <option value="bestselling">Best Selling</option>
          <option value="lowestprice">Lowest to Highest</option>
          <option value="highestprice">Highest to Lowest</option>
          <option value="clearfilter" className='text-rose-700'>Clear Filter</option>
        </select>
      </div>
    </div>
  );
}

export default SortBy;
