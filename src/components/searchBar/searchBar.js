import React from "react";
import './searchBar.css'

const SearchBar = ( { businessValue, businessValueHandler, setBusinessValue, cityValue, setCityValue, cityValueHandler, searchFormHandler, searchYelp}) => {


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