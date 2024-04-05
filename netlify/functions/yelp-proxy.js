const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  // Декодирование параметров из строки запроса
  let { path, term, location, sortBy, categories, businessId } = event.queryStringParameters;

  // Определяем, делаем ли мы запрос на детали бизнеса или общий поиск
  let apiUrl;
  if (businessId) {
    // Если запрос касается конкретного бизнеса по ID
    apiUrl = `https://api.yelp.com/v3/businesses/${businessId}`;
  } else {
    // Общий поиск
    const params = new URLSearchParams();
    if (term) params.append('term', term);
    if (location) params.append('location', location);
    if (sortBy) params.append('sort_by', sortBy);
    if (categories) params.append('categories', categories);
    apiUrl = `https://api.yelp.com/v3/${path}?${params}`;
  }

  try {
    const yelpResponse = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`, // Использование ключа API Yelp из переменных окружения
        'Content-Type': 'application/json'
      }
    });

    if (!yelpResponse.ok) {
      throw new Error(`Yelp API responded with a status: ${yelpResponse.statusText}`);
    }

    const data = await yelpResponse.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  } catch (error) {
    console.error('Yelp Proxy Function Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error: Unable to fetch data from Yelp API' })
    };
  }
};
