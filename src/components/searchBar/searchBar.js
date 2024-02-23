import React from "react";
import './searchBar.css'

const SearchBar = ({yelpSorting}) => {
    return (
        <div className="search-bar div-column">
            <h1>Discover the amazing Georgian cuisine</h1>
            <h2>Where to eat Khachapuri and Khinkali in USA</h2>
            <form className="search-form div-row">
                <input 
                    id="business"
                    value=""
                    placeholder="Your favorite"
                />
                <input 
                    id="city"
                    value=""
                    placeholder="Choose city"
                />
                <button>Find food!</button>   
            </form>               
        </div>        
    )
}

export default SearchBar;