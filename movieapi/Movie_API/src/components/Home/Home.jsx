import React, { useState, useEffect } from 'react'
import movieApi from '../../api/Api'
import { APIKey } from '../../api/ApiKey'
import { useDispatch } from 'react-redux'
import { addMovie } from '../../store/Reducer'


// Components
import MovieListing from '../MovieListing/MovieListing'

function Home() {

    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchMovies = async () => {
            const searchKey = search ? search : "Thor";
            const res = await movieApi.get(`?apikey=${APIKey}&s=${searchKey}&type=`)

            setTimeout(() => {
                dispatch(addMovie(res.data.Search))
            }, 500);
        }

        fetchMovies();
    }, [search]);

    return (
        <>
            <div className=''>
                <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                <MovieListing />
            </div>
        </>



    )
}

export default Home