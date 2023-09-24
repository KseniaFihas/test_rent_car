import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Listing from './Listing';
import css from './Catalogepage.module.css';

function Catalogepage() {


  
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const perPage = 8;

 const fetchListings = useMemo(
  () => async () => {
    try {
      const response = await axios.get(`https://6478edff362560649a2eab1e.mockapi.io/car?page=${page}&limit=${perPage}`);
      const newListingData = response.data;
    
      setListings((prevListings) => {
        const uniqueListings = [...prevListings, ...newListingData].filter(
          (listing, index, self) => self.findIndex((l) => l.id === listing.id) === index
        );
        return uniqueListings;
      });
      setLoading(false);
    } catch (error) {
      console.error('Помилка завантаження оголошень: ', error);
    }
  },
  [page, perPage]
);

  useEffect(() => {
    fetchListings(); 
  }, [page, fetchListings]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };




  return (
    <div>
      <h1>Каталог оголошень</h1>

      <div className={css.container}>
        
        {listings.map((listing) => (
          <Listing key={listing.id} car={listing} />
        ))}
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : null}
      <div className={css.load}>
          <button className={css.more} onClick={loadMore}>
          Load More
        </button>
          </div>
      
      </div>
        
    
  );
}

export default Catalogepage;