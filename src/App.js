import './App.css';
import React, {useState, useEffect} from 'react';
import BusinessList from './components/businessList/businessList';
import Header from './components/header/header';
import SearchBar from './components/searchBar/searchBar';
import { yelpSorting } from './data/yelpSorting';
import searchBusiness from './utils/yelp';

function App() {
  
  const [businessList, setBusinessList] = useState([]);
  const [fullBusinessList] = useState([]);
  const [visibilityOfSearchDiv, setVisibilityOfSearchDiv] = useState({display: 'none'});
  const [businessValue, setBusinessValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [activeSort, setActiveSort] = useState('best_match');

  const [noResultsMessage, setNoResultsMessage] = useState('');

  // Initial loading of businesses
  const fetchDefaultRestaurants = async () => {
    const defaultLocation = 'New York'; // May be chanched by other cities
    const defaultTerm = 'Georgian';
    const defaultSort = 'best_match';
    try {
      const businesses = await searchBusiness(defaultTerm, defaultLocation, defaultSort);
      if (businesses && businesses.length > 0) {
        setBusinessList(businesses);
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
        setNoResultsMessage(''); // Clear message about no results
    } else {
        setBusinessList([]);
        setNoResultsMessage('No search results. Please, try another query'); // Message if no results
    }
  };

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

  // const businessListHandler = () => {
  //   let filteredList = fullBusinessList; 
  //   if (businessValue) {
  //       const lowerCaseBusinessValue = businessValue.toLowerCase(); 
  //       filteredList = filteredList.filter((item) => item.name.toLowerCase().includes(lowerCaseBusinessValue));
  //   }
  //   if (cityValue) {
  //       const lowerCaseCityValue = cityValue.toLowerCase(); 
  //       filteredList = filteredList.filter((item) => item.city.toLowerCase().includes(lowerCaseCityValue));
  //   }
  //   setBusinessList(filteredList); 
  //   setVisibilityOfSearchDiv({display: filteredList.length > 0 ? 'flex' : 'none'}); 
  // }

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