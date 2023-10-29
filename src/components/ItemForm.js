import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function ItemForm({ categories, onItemFormSubmit }) {
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('Produce');

  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setItemCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };

    onItemFormSubmit(newItem);

    // Reset the form after submission
    setItemName('');
    setItemCategory('Produce');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={itemName} onChange={handleNameChange} />
      </label>
      <label>
        Category:
        <select value={itemCategory} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
