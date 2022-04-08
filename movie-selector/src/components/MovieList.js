import React from 'react';

const MovieList = (props) => {
    console.log(props);
    return (
        <>
            {props.movies.map((movie, index) => <div>
                <img src={movie.Poster} alt='movie'></img>
            </div>)}
        </>
    )
}
export default MovieList;
