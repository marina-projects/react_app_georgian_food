import React, {useState} from "react";
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

const BusinessCard = ({imageSrc, name, address, city, state, rating, reviewCount, id}) => {

    const [open, setOpen] = React.useState(false);
    const [details, setDetails] = useState(null); // Состояние для хранения деталей и отзывов


    const handleOpen = async () => {
        // Запускаем индикатор загрузки или аналогичный механизм, если необходимо
        // Выполняем запрос к Netlify Function для получения дополнительной информации о бизнесе
        try {
            const detailsResponse = await fetch(`/.netlify/functions/yelp-proxy?businessId=${id}`);
            const detailsData = await detailsResponse.json();
            
            // Предположим, что у нас есть состояние для хранения этих деталей
            console.log(detailsData);
            setDetails(detailsData); // Сохраняем полученные детали в состоянии
    
            setOpen(true); // Открываем модальное окно после загрузки данных
        } catch (error) {
            console.error("Ошибка при получении детальной информации о бизнесе:", error);
            // Обрабатываем ошибку, возможно уведомляем пользователя
        }
    };
    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <BusinessPopup 
                        name={name}
                        imageSrc={imageSrc}
                        rating={rating}
                        reviewCount={reviewCount}
                        address={address}
                        city={city}
                        state={state}
                        details={details}
                    />
                </Box>
            </Modal>
        </>        
    )
}

export default BusinessCard;