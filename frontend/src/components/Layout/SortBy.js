import { LayoutGrid, LayoutList } from 'lucide-react';
import React, { useState } from 'react';

function SortBy({ onSortChange }) {
  const [sortValue, setSortValue] = useState(''); // Initialize to an empty string

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSortValue(selectedValue);
    onSortChange(selectedValue);
  };

  return (
  
    <>
      <div className={`w-11/12 mx-auto sm:px-6 sm:py-4  lg:px-1`}>
      <div className="mt-8 sm:flex sm:items-center sm:justify-between">
      <div className="block sm:hidden">
      
      </div>

      <div className="hidden sm:flex sm:gap-4">
        <div className="relative">
         <LayoutGrid/>
        </div>

        <div className="relative">
          <LayoutList/>
        </div>
      </div>

      <div className="block 370px:mb-5 sm:block">
        <label htmlFor="SortBy" className="sr-only">SortBy</label>

        <select value={sortValue} onChange={(e) => handleChange(e)} className="h-10 rounded border-gray-300 text-sm">
          <option value='' disabled>Recently Added</option>
          <option value="bestselling">Best Selling</option>
        <option value="lowestprice">Lowest to Highest</option>
          <option value="highestprice">Highest to Lowest</option>
    <option value="clearfilter" className='text-rose-700'>Clear Filter</option>
        </select>
      </div>
    </div>
      </div>
    </>
  );
}

export default SortBy;




