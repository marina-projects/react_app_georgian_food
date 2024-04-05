import React from "react";
import './businessCard.css';
import Rating from '@mui/material/Rating';


const BusinessCard = ({imageSrc, name, address, city, state, rating, reviewCount, id, url}) => {

    const handleOpen = () => {
        window.open(url, "_blank"); // Открываем URL в новой вкладке
    };

    return (
        <>
            <div className="business-card div-row" onClick={handleOpen}>
                <img src={imageSrc} alt=''/>
                <div className="card-text-area div-row">
                    <h3>{name}</h3>
                    <div className="card-address-area div-column">
                        <p>{address}</p>
                        <p>{city}</p>
                        <span>{state}</span>
                    </div>
                    <div className="card-rating-area div-column">
                    <Rating name="read-only" value={rating} readOnly />
                        <p>Rating: {rating} stars</p>
                        <p>{reviewCount} reviews</p>
                    </div>
                </div>    
            </div>
        </>        
    )
}

export default BusinessCard;