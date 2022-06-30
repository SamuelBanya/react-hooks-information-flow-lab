import React from "react";

// This is being passed as a callback function from the parent, 'ShoppingList' Component
// down to the 'Filter' child component

function Filter({ onCategoryChange }) {
  return (
    <>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </>
  );
}

export default Filter;
