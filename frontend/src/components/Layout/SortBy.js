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
      {/* <div className={`w-11/12 mx-auto sm:px-6 sm:py-4  lg:px-1`}>
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
      </div> */}

<div className={`w-11/12 mx-auto sm:px-6 sm:py-4  lg:px-1`}>
      <div class="mt-8 flex items-center justify-between">
      <div class="flex rounded border border-gray-100">
        <button
          class="inline-flex h-10 w-10 items-center justify-center border-e text-gray-600 transition hover:bg-gray-50 hover:text-rose-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-5 w-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
            />
          </svg>
        </button>

        <button
          class="inline-flex h-10 w-10 items-center justify-center text-gray-600 transition hover:bg-gray-50 hover:text-rose-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-5 w-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </div>

      <div>
        <label for="SortBy" class="sr-only">SortBy</label>

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




