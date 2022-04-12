import React from 'react';
import '../styles/MovieList.css';
const MovieList = (props) => {
   const FavouriteComponent = props.favouriteComponent;
    return (
        <>
            {props.movies.map((movie, index) => 
            <div key={index} className='image-container d-flex movie-frame justify-content-start p-0 m-3'>
                <img src={movie.Poster} alt='movie'></img>
                <div 
                onClick={() => props.handleFavouriteClick(movie)}
                 className='overlay d-flex align-items-center justify-content'>
                    <FavouriteComponent />
                </div>
            </div>)}
        </>
    )
}
export default MovieList;
