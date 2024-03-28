import React from "react";
import './searchBar.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const SearchBar = ( { businessValue, businessValueHandler, setBusinessValue, cityValue, setCityValue, cityValueHandler, searchFormHandler, searchYelp, cities}) => {


    return (
        <div className="search-bar div-column">
            <h1>Discover the amazing Georgian cuisine</h1>
            <h2>Where to eat Khachapuri and Khinkali in USA</h2>
            <form className="search-form div-row" onSubmit={searchFormHandler}>
                <input 
                    id="business"
                    value={businessValue}
                    onChange={businessValueHandler}
                    placeholder="Your favorite"
                />
                <Autocomplete
                    className="autocomlete-city"
                    options={cities}
                    renderInput={(params) => <TextField {...params} label="Выберите город" />}
                    value={cityValue}
                    onChange={(event, newValue) => {
                        setCityValue(newValue);
                    }}
                    style={{ width: 300 }}
                />
                {/* <input 
                    id="city"
                    value={cityValue}
                    onChange={cityValueHandler}
                    placeholder="Choose city"
                /> */}
                <button type="submit">Find food!</button>   
            </form>               
        </div>        
    )
}

export default SearchBar;

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
      label: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    }
];