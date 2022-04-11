import React from 'react';

const MovieListHeading = (props) => {

    return (
        <div className='col'>
            <h1>{props.heading} <span className='d-flex h6'>{props.tip}</span></h1>
        </div>
    )
 }

 export default MovieListHeading
