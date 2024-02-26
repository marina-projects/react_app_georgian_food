import './App.css';
import React, {useState} from 'react';
import BusinessList from './components/businessList/businessList';
import Header from './components/header/header';
import SearchBar from './components/searchBar/searchBar';
import { businessExample } from './data/businesseExample';
import { yelpSorting } from './data/yelpSorting';

function App() {
  
  const [businessList, setBusinessList] = useState(businessExample);
  const [fullBusinessList] = useState(businessExample);
  const [visibilityOfSearchDiv, setVisibilityOfSearchDiv] = useState({display: 'none'});
  const [businessValue, setBusinessValue] = useState('');
  const [cityValue, setCityValue] = useState('');

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
      console.log(`Searching Yelp with ${businessValue} in ${cityValue}`)
  }

  // const businessListHandler = () => {
  //   if (businessValue) {
  //       const filteredList = businessList.filter((item) => item.name.includes(businessValue));
  //       setBusinessList(filteredList);
  //       setVisibilityOfSearchDiv({display: 'block'})
  //   } 
  // }

  const businessListHandler = () => {
    let filteredList = fullBusinessList; 
    if (businessValue) {
        filteredList = filteredList.filter((item) => item.name.includes(businessValue));
    }
    if (cityValue) {
        filteredList = filteredList.filter((item) => item.city.includes(cityValue));
    }
    setBusinessList(filteredList);
    setVisibilityOfSearchDiv({display: filteredList.length > 0 ? 'block' : 'none'});
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

        />
        <BusinessList
            yelpSorting={yelpSorting}
            businesses={businessList}
            visibilityOfSearchDiv={visibilityOfSearchDiv}
            businessValue={businessValue}
            cityValue={cityValue}
            clearSearchHandler={clearSearchHandler}
        />
    </div>
  );
}

export default App;
