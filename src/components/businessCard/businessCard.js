import React, { useState } from "react";
import './businessCard.css';
import Rating from '@mui/material/Rating';


const BusinessCard = (props) => {
    const [value, setValue] = useState();

    return (
        <div className="business-card div-row">
            <img src={props.imageSrc} alt=''/>
            <div className="card-text-area div-row">
                <h3>{props.name}</h3>
                <div className="card-address-area div-column">
                    <p>{props.address}</p>
                    <p>{props.city}</p>
                    <span>{props.state}</span>
                </div>
                <div className="card-rating-area div-column">
                <Rating name="read-only" value={value} readOnly />
                    <p>Rating: {props.rating} stars</p>
                    <p>{props.reviewCount} reviews</p>
                </div>
                
            </div>
            
        </div>
    )
}

export default BusinessCard;