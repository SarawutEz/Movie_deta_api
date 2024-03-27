import React from 'react'
import { Link } from 'react-router-dom'

function MovieCrad({ movie }) {
    return (
        <>
            <div className='container mx-auto'>
                <div >
                    <img src={movie.Poster} alt={movie.Title} />
                </div>

                <div>
                    <span>{movie.Title}</span>
                    <p>Year : {movie.Year}</p>
                </div>

                <div>
                    <Link to={`movie/${movie.imdbID}`}>Read More</Link>
                </div >
            </div>
        </>
    )
}

export default MovieCrad