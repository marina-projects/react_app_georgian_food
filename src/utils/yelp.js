function searchBusiness(term, location, sortBy) {
    // Построение URL для запроса к Netlify Function
    const functionUrl = `https://georgian-food.netlify.app/.netlify/functions/yelp-proxy?`;

    // Формирование параметров запроса
    const params = new URLSearchParams({
        term,
        location,
        sortBy,
        path: 'businesses/search', // Указание пути API Yelp для функции
    });

    // Выполнение запроса к Netlify Function
    return fetch(`${functionUrl}?${params}`, {
        method: 'GET', // Использование метода GET
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Request Failed!');
        }
        return response.json();
    })
    .then(jsonResponse => {
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => ({
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0]?.title,
                rating: business.rating,
                reviewCount: business.review_count,
                url: business.url, // Получение URL страницы бизнеса на Yelp
            }));
        }
    })
    .catch(error => console.error('Error fetching data:', error));
}

export default searchBusiness;