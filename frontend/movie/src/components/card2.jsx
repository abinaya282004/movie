import React, { useEffect, useState } from 'react';
import MovieCard from './card'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const CardProp = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://backend-crud-one.vercel.app/product');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const filteredMovies = movies.filter(movie =>
    movie.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className='contianer-fluid'>
        <div className="row mb-4 mx-lg-3 mx-md-4 mx-sm-5" style={{ display: 'flex'}}>
          {filteredMovies.length > 0 ? (
            filteredMovies.map(movie => (
              <div className='col-lg-3 col-md-6 col-sm-12' key={movie._id}>
                <MovieCard movie={movie} />
              </div>
            ))
          ) : (
            <div>No movies found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default CardProp; 



