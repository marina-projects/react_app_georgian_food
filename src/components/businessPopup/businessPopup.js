import React from "react";
import { Rating } from "@mui/material";

const BusinessPopup = ( {imageSrc, name, address, city, state, rating, reviewCount, details} ) => {
    return (
        <>
            <img src={imageSrc} alt='' width="200px"/>
            <div className="card-text-area div-row">
                    <h3>{name}</h3>
                    <div className="card-address-area div-column">
                        <p>{address}</p>
                        <p>{city}</p>
                        <span>{state}</span>
                        <span>{details}</span>

                    </div>
                    <div className="card-rating-area div-column">
                    <Rating name="read-only" value={rating} readOnly />
                        <p>Rating: {rating} stars</p>
                        <p>{reviewCount} reviews</p>
                    </div>
                </div>    
        </>
    )
}

export default BusinessPopup;