import React from "react";
import BusinessCard from "../businessCard/businessCard";
import './businessList.css';
import closeIcon from '../../images/Close_round_light.svg'

const BusinessList = ({businesses, yelpSorting, visibilityOfSearchDiv, businessValue, cityValue, clearSearchHandler, activeSort, setActiveSort, handleSortClick}) => {

    return (
        <div className="business-list div-column">
            <div className="search-for div-row" style={visibilityOfSearchDiv}>
            <p>Searching for: {(businessValue && businessValue.length) !== 0 ? <span>'{businessValue}'</span> : <span>All restaurants</span>} in {(cityValue && cityValue.length) !== 0 ? <span>{cityValue}</span> : <span>All cities</span>}</p>

                <div className="clear-search div-row">
                    <p onClick={clearSearchHandler}>Clear search </p>
                    <img src={closeIcon} alt="" onClick={clearSearchHandler} height={'20px'}/>
                </div>
            </div>
            <p style={businesses.length === 0 ? {display: 'flex'} : {display: 'none'}} className="no-found">Loading restaurants... </p>
            <div className="sorting div-row" style={businesses.length !== 0 ? {display: 'flex'} : {display: 'none'}}>
                <span>Sort by:</span>
                {yelpSorting.map((sortItem, index) => (
                    <button className={activeSort === index ? 'sort-button-active' : 'sort-button'} onClick={() => handleSortClick(index)} key={index}>{sortItem.name}</button>
                ))}
            </div>
            {businesses.map((businessItem) => (
                <>
                    <BusinessCard
                        id={businessItem.id}
                        key={businessItem.id} 
                        imageSrc={businessItem.imageSrc}
                        name={businessItem.name}
                        address={businessItem.address}
                        city={businessItem.city}
                        state={businessItem.state}
                        rating={businessItem.rating}
                        reviewCount={businessItem.reviewCount}
                        url={businessItem.url}
                    />
                </>
                ))
            }
        </div>
    )
}

export default BusinessList;