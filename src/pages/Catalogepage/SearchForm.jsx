import React, { useState } from 'react';
import css from './SearchForm.module.css'



const SearchForm = () => {
  const [carBrand, setCarBrand] = useState('');
  const [pricePerHour, setPricePerHour] = useState('');
  const [carMileage, setCarMileage] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    // Додайте код для обробки поданих даних
    console.log('Form submitted:', {
      carBrand,
      pricePerHour,
      carMileage,
    });
  };

  return (
   <form onSubmit={handleSubmit} className={css.searchForm}>
  <label className={css.formLabel}>
    Car brand
    <input
      type="text"
      value={carBrand}
      onChange={(e) => setCarBrand(e.target.value)}
      placeholder="Enter the text"
      required
    />
  </label>

  <label className={css.formLabel}>
    Price/1 hour
    <input
      type="number"
      value={pricePerHour}
      onChange={(e) => setPricePerHour(e.target.value)}
      placeholder="To $"
      required
    />
  </label>

  <label className={css.formLabel}>
    Car mileage/km
    <input
      type="number"
      value={carMileage}
      onChange={(e) => setCarMileage(e.target.value)}
      placeholder="From | To"
      required
    />
  </label>

  <button type="submit" className={css.searchButton}>
    Search
  </button>
</form>




  );
};

export default SearchForm;
