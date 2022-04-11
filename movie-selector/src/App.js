
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import React, { useEffect, useState } from 'react';
import './App.css';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SeachBox';
import AddFavourite from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';

function App() {
    const [movies, setMovies] = useState([])
    const [favourites, setFavourites] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const getMovieRequest = async (resp) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ddd1d67b`
        const response = await fetch(url)
        const responseJSON = await response.json()

        if (responseJSON.Search) {
            setMovies(responseJSON.Search)
        }
    }

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue])

    useEffect(() => {
        const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'))
        setFavourites(movieFavourites)
    }, [])

    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))

    }


    const addFavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie]
        setFavourites(newFavouriteList)
        saveToLocalStorage(newFavouriteList)

    }

    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter(favourites => favourites.imdbID !== movie.imdbID)
        setFavourites(newFavouriteList)
        saveToLocalStorage(newFavouriteList)
    }

    return (
        <div className="container-fluid movie-app">
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading='Movies' tip='SHIFT + Wheel - To Scroll sideways' />
                <SearchBox
                    searchValue={searchValue}
                    setSearchValue={setSearchValue} />
            </div>
            <div className='row'>
                <MovieList
                    movies={movies}
                    handleFavouriteClick={addFavouriteMovie}
                    favouriteComponent={AddFavourite} />
            </div>
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading='Favourites' tip='' />
            </div>
            <div className='row'>
                <MovieList
                    movies={favourites}
                    handleFavouriteClick={removeFavouriteMovie}
                    favouriteComponent={RemoveFavourites}
                />
            </div>
        </div>
    );
}

export default App;
