
import css from './Modal.module.css';
import { useEffect } from 'react';
import icon from './SVG/symbol-defs.svg';








const Modal = ({ isOpen, onClose, children, car }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const {
    img,
    make,
    model,
    year,
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
    description,
    accessories,
    rentalConditions,
    rentalPrice,
  } = car;

const accessoriesString = accessories.join(" | ");
  const functionalitiesString = functionalities.join(" | ");



  const firstFunctionality =
    functionalities && functionalities.length > 0 ? functionalities[0] : '';
  const addressParts = address ? address.split(',') : '';
  const city = addressParts.length > 1 ? addressParts[1].trim() : '';
  const country = addressParts.length > 2 ? addressParts[2].trim() : '';
 

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;



  return (
    <div className={css.modal_overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button className={css.modal_close} onClick={onClose}>
          <svg width={24} height={24}>
            <use href={icon + '#icon-icon-close'}></use>
          </svg>
        </button>
        <div>
          <img src={img} className={css.modal_image} alt={`${make} ${model}`} />
          <h2 className={css.modal_h2}>{`${make} ${model}, ${year}`}</h2>
        </div>
        <div className={css.about}>
          <p style={{ whiteSpace: 'nowrap' }}>{`${city} | ${country}`}</p>
         <p>{`${city} | ${rentalCompany} | ${type} | ${model} | ${mileage} | ${firstFunctionality}`}</p>
          <p className={css.description}>{description}</p>
          <h3 className={css.h3}>Accessories and functionalities:</h3>
          <p>{accessoriesString}</p>
          <p>{functionalitiesString}</p>
<div className={css.rental_conditions}>
  <div className={css.rental_conditions_heading}>
    <h3 className={css.h3}>Rental Conditions:</h3>
  </div>
  <div className={css.rental_conditions_list}>
    {rentalConditions.split('\n').slice(0, 2).map((condition, index) => (
      <div key={index} className={css.rental_condition}>
        {condition}
      </div>
    ))}
  </div>
  <div className={css.rental_conditions_list}>
    {rentalConditions.split('\n').slice(2).map((condition, index) => (
      <div key={index} className={css.rental_condition}>
        {condition}
      </div>
    ))}
 <div className={css.rental_condition}>
  Mileage: <span className={css.blue_text}>{mileage}</span>
</div>
<div className={css.rental_condition}>
  Price: <span className={css.blue_text}>{rentalPrice}</span>
</div>
  </div>
</div>
        </div>
        {children}
         <button className={css.rental} type='button'>Rental car</button>
      </div>
    </div>
  );
};

export default Modal;