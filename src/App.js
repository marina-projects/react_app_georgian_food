import './App.css';
import React, {useState} from 'react';
import BusinessList from './components/businessList/businessList';
import Header from './components/header/header';
import SearchBar from './components/searchBar/searchBar';
import { businessExample } from './data/businesseExample';
import { yelpSorting } from './data/yelpSorting';
import searchBusiness from './utils/yelp';

function App() {
  
  const [businessList, setBusinessList] = useState(businessExample);
  const [fullBusinessList] = useState(businessExample);
  const [visibilityOfSearchDiv, setVisibilityOfSearchDiv] = useState({display: 'none'});
  const [businessValue, setBusinessValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [activeSort, setActiveSort] = useState('best_match');

  const [noResultsMessage, setNoResultsMessage] = useState('');

  const searchYelp = async (businessValue, cityValue, activeSort) => {
    const businesses = await searchBusiness(businessValue, cityValue, activeSort);
    if (businesses && businesses.length > 0) {
        setBusinessList(businesses);
        setNoResultsMessage(''); // Очистить сообщение об отсутствии результатов, если оно было установлено ранее
    } else {
        setBusinessList([]);
        setNoResultsMessage('Ничего не найдено. Пожалуйста, измените критерии поиска.'); // Установить сообщение об отсутствии результатов
    }
};

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
    businessListHandler();
    searchYelp(businessValue, cityValue, activeSort);
    console.log(`Searching Yelp with ${businessValue} in ${cityValue}`);
  }

  const businessListHandler = () => {
    let filteredList = fullBusinessList; 
    if (businessValue) {
        const lowerCaseBusinessValue = businessValue.toLowerCase(); 
        filteredList = filteredList.filter((item) => item.name.toLowerCase().includes(lowerCaseBusinessValue));
    }
    if (cityValue) {
        const lowerCaseCityValue = cityValue.toLowerCase(); 
        filteredList = filteredList.filter((item) => item.city.toLowerCase().includes(lowerCaseCityValue));
    }
    setBusinessList(filteredList); 
    setVisibilityOfSearchDiv({display: filteredList.length > 0 ? 'flex' : 'none'}); 
  }

  const handleSortClick = (index) => {
    setActiveSort(index);
    const sortFunction = yelpSorting[index].function;
    const sortedBusinesses = [...businessList].sort(sortFunction);
    setBusinessList(sortedBusinesses);
}

  const clearSearchHandler = () => {
    setBusinessList(fullBusinessList);
    setVisibilityOfSearchDiv({display: 'none'});
    setBusinessValue('');
    setCityValue('');
  }

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
