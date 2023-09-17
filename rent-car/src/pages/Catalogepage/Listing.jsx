import React from 'react';
import css from './Listing.module.css';

const Listing = ({ car }) => {
if (!car) {
    return null; 
  }

  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
  } = car;

   const firstFunctionality = functionalities && functionalities.length > 0 ? functionalities[0] : '';
 const addressParts = address ? address.split(',') : [];
  const city = addressParts.length > 1 ? addressParts[1].trim() : '';
  const country = addressParts.length > 2 ? addressParts[2].trim() : '';
  const hasValidImage = img && typeof img === 'string' && img.trim() !== '';


  return (
    <div className={css.card}>
      <div>
        {hasValidImage ? (
          <img src={img} alt={`${make} ${model}`} className={css.card_img} />
        ) : (
          <p className={css.noImage}>
We will add a photo soon</p>
        )}
    <h2 className={css.card_title}>
      <span>{`${make} ${model}, ${year}`}</span>
      <span className={css.card_price}>{rentalPrice}</span>
        </h2>
        <div className={css.about}> 
    <p style={{ whiteSpace: 'nowrap' }}>{`${city} ${country}`}</p>
          <p className="divider" style={{ whiteSpace: 'nowrap' }}>{rentalCompany}</p>
          <p className="divider">{type}</p>
          <p className="divider">{model}</p>
          <p className="divider">{mileage}</p>
   <p className="divider">{firstFunctionality}</p>
           </div>
     <div className={css.loadContainer}>
          <button className={css.load}>Learn more</button>
        </div>
  </div>
  </div>
);
};

export default Listing;








