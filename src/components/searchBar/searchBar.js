import React, { useState } from "react";
import './searchBar.css'

const SearchBar = ({yelpSorting}) => {

    const [businessValue, setBusinessValue] = useState('');
    const [cityValue, setCityValue] = useState('');

    const businessValueHandler = (e) => {
        e.preventDefault();
        setBusinessValue(e.target.value)
    }

    const cityValueHandler = (e) => {
        e.preventDefault();
        setCityValue(e.target.value);
    }

    const searchFormHandler = (e) => {
        e.preventDefault();
        console.log(`Searching Yelp with ${businessValue} in ${cityValue}`)
    }

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
                <input 
                    id="city"
                    value={cityValue}
                    onChange={cityValueHandler}
                    placeholder="Choose city"
                />
                <button type="submit">Find food!</button>   
            </form>               
        </div>        
    )
}

export default SearchBar;