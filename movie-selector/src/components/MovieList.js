import React from 'react';
import '../styles/MovieList.css';
const MovieList = (props) => {
    console.log(props);
    return (
        <>
            {props.movies.map((movie, index) => 
            <div className='image-container d-flex movie-frame justify-content-start p-0 m-3'>
                <img src={movie.Poster} alt='movie'></img>
                <div className='overlay d-flex align-items-center justify-content'></div>
            </div>)}
        </>
    )
}
export default MovieList;
