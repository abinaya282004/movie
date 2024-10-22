
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './cartcontext'; 
import NavBar from './navbar';

function DetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useContext(CartContext); 

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`https://backend-crud-one.vercel.app/product/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movie) return <div>No movie found</div>;

  return (
    <>
    <NavBar/>
    <div className='container-fluid row d-flex flex-row mt-5 justify-content-center'>
      <div className='col-lg-5 col-md-12 col-sm-12'>
        <img className='img-fluid' src={movie.image} alt={movie.title} style={{ height: '600px' }} />
      </div>
      <div className='col-lg-6'>
        <h2>Movie Name: {movie.name}</h2>
        <h3 className='mt-3'>Director: {movie.director}</h3>
        <h5 className='mt-3'>Release Date: {movie.releasedate}</h5>
        <h6 className='mt-3'>Budget: {movie.budget}</h6>
        <h6 className='mt-3'>Ticket Price: {movie.ticketprice}</h6>
        <p className='mt-3'><b style={{ fontSize: '18px' }}>Description: </b>{movie.description}</p>

        <button type="button" className="btn btn-danger mt-3" onClick={() => addToCart(movie)}>
          Add to Cart
        </button>
        <button type="button" className="btn btn-info mt-3 mx-5">Book Now</button>
      </div>
    </div>
    </>
  );
}

export default DetailPage;
