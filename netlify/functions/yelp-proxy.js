const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  // Декодирование параметров из строки запроса
  let { path, term, location, sortBy, categories } = event.queryStringParameters;
  
  // Если переданы дополнительные параметры, добавляем их в запрос
  const params = new URLSearchParams();
  if (term) params.append('term', term);
  if (location) params.append('location', location);
  if (sortBy) params.append('sort_by', sortBy);
  if (categories) params.append('categories', categories);

  // Формирование URL для запроса к Yelp API
  const apiUrl = `https://api.yelp.com/v3/${path}?${params}`;

  try {
    // Выполнение запроса к Yelp API с добавлением необходимого заголовка авторизации
    const yelpResponse = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`, // Использование ключа API Yelp из переменных окружения
        'Content-Type': 'application/json'
      }
    });

    // Проверка на успешный ответ от API
    if (!yelpResponse.ok) {
      // Возвращение ошибки, если ответ API не успешен
      throw new Error(`Yelp API responded with a status: ${yelpResponse.statusText}`);
    }

    // Преобразование ответа от API в JSON
    const data = await yelpResponse.json();

    // Возвращение успешного ответа с данными от Yelp API
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  } catch (error) {
    // Логирование и возвращение ошибки в случае её возникновения
    console.error('Yelp Proxy Function Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error: Unable to fetch data from Yelp API' })
    };
  }
};
