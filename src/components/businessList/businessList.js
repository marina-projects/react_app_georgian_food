import React, {useState} from "react";
import BusinessCard from "../businessCard/businessCard";
import './businessList.css';

const BusinessList = ({businesses, yelpSorting}) => {

    const [activeSort, setActiveSort] = useState(null);

    const handleSortClick = (index) => {
        setActiveSort(index);
    }

    return (
        <div className="business-list div-column">
            <div className="sorting div-row">
                <span>Sort by:</span>
                {yelpSorting.map((sortItem, index) => (
                    <button className={activeSort === index ? 'sort-button-active' : 'sort-button'} onClick={() => handleSortClick(index)} key={index}>{sortItem.name}</button>
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