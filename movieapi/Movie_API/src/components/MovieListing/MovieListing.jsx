import React from 'react'
import { useSelector } from 'react-redux'
import MovieCrad from '../MovieCrad/MovieCrad';

function MovieListing() {
    const { movies } = useSelector((state) => state.movies);

    return (
        <div className='container'>
            {movies && movies.map((movie) => (
                <MovieCrad key={movie.imdbID} movie={movie} />
            ))}
        </div>
    )
}

export default MovieListing