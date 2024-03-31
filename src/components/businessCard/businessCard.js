import React from "react";
import './businessCard.css';
import Rating from '@mui/material/Rating';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import BusinessPopup from "../businessPopup/businessPopup";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const BusinessCard = (props) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className="business-card div-row" onClick={handleOpen}>
                <img src={props.imageSrc} alt=''/>
                <div className="card-text-area div-row">
                    <h3>{props.name}</h3>
                    <div className="card-address-area div-column">
                        <p>{props.address}</p>
                        <p>{props.city}</p>
                        <span>{props.state}</span>
                    </div>
                    <div className="card-rating-area div-column">
                    <Rating name="read-only" value={props.rating} readOnly />
                        <p>Rating: {props.rating} stars</p>
                        <p>{props.reviewCount} reviews</p>
                    </div>
                </div>    
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <BusinessPopup />
                </Box>
            </Modal>
        </>        
    )
}

export default BusinessCard;