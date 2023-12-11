import React from 'react';
import css from './Listing.module.css';
import Modal from '../../Components/Modal';
import { useState } from 'react';
import icon from '../../Components/SVG/symbol-defs.svg';

const Listing = ({ car }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const firstFunctionality =
    functionalities && functionalities.length > 0 ? functionalities[0] : '';
  const addressParts = address ? address.split(',') : [];
  const city = addressParts.length > 1 ? addressParts[1].trim() : '';
  const country = addressParts.length > 2 ? addressParts[2].trim() : '';
  const hasValidImage = img && typeof img === 'string' && img.trim() !== '';

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.card}>
      <div className={css.heartButtonContainer}>
  <button className={css.favoriteButton}>
    <svg width={24} height={24} fill="white">
      <use href={icon + '#icon-icon-heart'}></use>
    </svg>
  </button>
</div>
      <div>
        {hasValidImage ? (
          <img src={img} alt={`${make} ${model}`} className={css.card_img} />
        ) : (
          <p className={css.noImage}>We will add a photo soon</p>
        )}
        <h2 className={css.card_title}>
          <span>{`${make} ${model}, ${year}`}</span>
          <span className={css.card_price}>{rentalPrice}</span>
        </h2>
        <div className={css.about}>
          <p style={{ whiteSpace: 'nowrap' }}>{`${city} ${country}`}</p>
          <p className="divider" style={{ whiteSpace: 'nowrap' }}>
            {rentalCompany}
          </p>
          <p className="divider">{type}</p>
          <p className="divider">{model}</p>
          <p className="divider">{mileage}</p>
          <p className="divider">{firstFunctionality}</p>
        </div>
        <div className={css.loadContainer}>
          <button className={css.load} onClick={openModal}>
            Learn more
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal} car={car}>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Listing;