import React, { useState } from 'react';
import {BiSearchAlt2} from 'react-icons/bi';
import { getOneProject } from '../../utils/api.utils';

import './SearchBar.css';


const SearchBar = () => {
    const [search, setSearch] = useState('');
    const [result, setResult] = useState();

    const handleSearch = (e) => {
        e.preventDefault();
        onSearchResults(search)
        console.log('search:', search);
    }

    const handleSearchEnter = (e) => {
        if(e.key === 'Enter'){
            onSearchResults(search)
            console.log('testando o enter')
        }
    }

    const onSearchResults = async (result) => {
        const resultSearch = await getOneProject(result);
        setResult(resultSearch);
        console.log(resultSearch);
    }

  return (
    <div className='searchbar'>
        <input 
            type="text" 
            placeholder='Search' 
            className='searchbar_input'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearchEnter}
        />
        <button type='submit' className='searchbar_button' onClick={handleSearch}>
            <BiSearchAlt2/>
        </button>
    </div>
  )
}

export default SearchBar