import React from "react";
import BusinessCard from "../businessCard/businessCard";
import './businessList.css';

const BusinessList = ({businesses, yelpSorting}) => {
    return (
        <div className="business-list div-column">
            <div className="sorting div-row">
                <span>Sort by:</span>
                {yelpSorting.map((sortItem) => (
                    <button>{sortItem.name}</button>
                ))}
            </div>
            {businesses.map((businessItem) => (
                <>
                    <BusinessCard
                        key={businessItem.id} 
                        imageSrc={businessItem.imageSrc}
                        name={businessItem.name}
                        address={businessItem.address}
                        city={businessItem.city}
                        state={businessItem.state}
                        rating={businessItem.rating}
                        reviewCount={businessItem.reviewCount}
                    />
                </>
                ))
            }
        </div>
    )
}

export default BusinessList;