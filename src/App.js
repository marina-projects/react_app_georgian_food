import './App.css';
import React, {useState, useEffect} from 'react';
import BusinessList from './components/businessList/businessList';
import Header from './components/header/header';
import SearchBar from './components/searchBar/searchBar';
import { yelpSorting } from './data/yelpSorting';
import searchBusiness from './utils/yelp';

function App() {
  
  const [businessList, setBusinessList] = useState([]);
  const [visibilityOfSearchDiv, setVisibilityOfSearchDiv] = useState({display: 'none'});
  const [businessValue, setBusinessValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [activeSort, setActiveSort] = useState('best_match');
  const [cities, setCities] = useState([]);


  const [noResultsMessage, setNoResultsMessage] = useState('');

  // Initial loading of businesses
  const fetchDefaultRestaurants = async () => {
    const defaultLocation = 'New-York'; // Можно изменить или выполнить запросы для нескольких городов
    const defaultTerm = 'Georgian';
    const defaultSort = 'best_match';
    try {
      const businesses = await searchBusiness(defaultTerm, defaultLocation, defaultSort);
      if (businesses && businesses.length > 0) {
        setBusinessList(businesses);
        const newCities = businesses.map(business => business.city);
        console.log("Загруженные города:", newCities);
        setCities(currentCities => [...new Set([...currentCities, ...newCities])]);
      } else {
        setNoResultsMessage('Грузинские рестораны не найдены. Пожалуйста, измените критерии поиска.');
      }
    } catch (error) {
      console.error('Ошибка при получении списка ресторанов:', error);
      setNoResultsMessage('Произошла ошибка при загрузке данных. Пожалуйста, попробуйте позже.');
    }
  };
  
  
  // useEffect for loading initial list by first render
  useEffect(() => {
    fetchDefaultRestaurants();
  }, []); 

  // loading business by search terms
  const searchYelp = async (businessValue, cityValue, activeSort) => {
    // Установка значения по умолчанию для города, если он не указан пользователем
    const searchLocation = cityValue || 'New York'; // Пример использования Нью-Йорка как значения по умолчанию
    console.log(`Searching Yelp with term: ${businessValue}, location: ${searchLocation}, sort by: ${activeSort}`);
    const businesses = await searchBusiness(businessValue, searchLocation, activeSort);
    if (businesses && businesses.length > 0) {
        setBusinessList(businesses);
        const newCities = businesses.map(business => business.city); // Исправлено здесь
        // Обновление списка городов с использованием функционального обновления состояния
        console.log("Новые города:", newCities);
        setCities(currentCities => [...new Set([...currentCities, ...newCities])]);
        setNoResultsMessage(''); // Clear message about no results
    } else {
        setBusinessList([]);
        setNoResultsMessage('No search results. Please, try another query'); // Message if no results
    }
  };

  useEffect(() => {
    console.log(cities);
  }, [cities]); // Эффект будет вызываться каждый раз, когда обновляется список городов
  
  

  // handlers for search fields and form
  const businessValueHandler = (e) => {
    e.preventDefault();
    setBusinessValue(e.target.value)
  }

  const cityValueHandler = (e) => {
    e.preventDefault();
    setCityValue(e.target.value);
  }

  const searchFormHandler = (e) => {
    e.preventDefault();
    // businessListHandler();
    searchYelp(businessValue, cityValue, activeSort);
    setVisibilityOfSearchDiv({display: 'flex'});
    console.log(`Searching Yelp with ${businessValue} in ${cityValue}`);

  }

  const handleSortClick = (index) => {
    setActiveSort(index);
    const sortFunction = yelpSorting[index].function;
    const sortedBusinesses = [...businessList].sort(sortFunction);
    setBusinessList(sortedBusinesses);
}

const clearSearchHandler = () => {
  fetchDefaultRestaurants(); // Повторный вызов функции загрузки ресторанов
  setVisibilityOfSearchDiv({display: 'none'}); // Скрываем результаты поиска
  setBusinessValue(''); // Сброс значения в поле поиска бизнеса
  setCityValue(''); // Сброс значения в поле поиска города
  setNoResultsMessage(''); // Сброс сообщения об отсутствии результатов
};

  return (
    <div className="App">
        <Header />
        <SearchBar
          businessValue={businessValue}
          setBusinessValue={setBusinessValue}
          businessValueHandler={businessValueHandler}
          cityValue={cityValue}
          setCityValue={setCityValue}
          cityValueHandler={cityValueHandler}
          searchFormHandler={searchFormHandler}
          searchYelp={searchYelp}
          cities={cities}
        />
        {noResultsMessage && <div className="no-results-message">{noResultsMessage}</div>}
        <BusinessList
            yelpSorting={yelpSorting}
            businesses={businessList}
            visibilityOfSearchDiv={visibilityOfSearchDiv}
            businessValue={businessValue}
            cityValue={cityValue}
            clearSearchHandler={clearSearchHandler}
            activeSort={activeSort}
            setActiveSort={setActiveSort}
            handleSortClick={handleSortClick}
        />
    </div>
  );
}

export default App;