import React from "react";
import './searchBar.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { allCities } from "../../data/citiesData";

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
                    options={allCities}
                    renderInput={(params) => <TextField {...params} label="Choose city" />}
                    value={cityValue}
                    onChange={(event, newValue) => {
                        setCityValue(newValue);
                    }}
                    style={{ width: 300 }}
                    defaultValue={'New-York'}
                />
                <button type="submit">Find food!</button>   
            </form>               
        </div>        
    )
}

export default SearchBar;