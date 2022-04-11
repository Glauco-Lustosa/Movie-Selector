import React from 'react';

const SearchBox = (props) => {
    return(
        <div className='col col-sm-4'>
            <input 
            className='form-control' 
            onChange={(event) => props.setSearchValue(event.target.value)} 
            value={props.value} 
            placeholder='Type to search...'>

            </input>
        </div>
    )
 }
export default SearchBox