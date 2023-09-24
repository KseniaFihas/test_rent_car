
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
  } = car;

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
          <p style={{ whiteSpace: 'nowrap' }}>{`${city} ${country}`}</p>
          <p className="divider" style={{ whiteSpace: 'nowrap' }}>
            {rentalCompany}
          </p>
          <p className="divider">{type}</p>
          <p className="divider">{model}</p>
          <p className="divider">{mileage}</p>
          <p className="divider">{firstFunctionality}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;