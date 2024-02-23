import './App.css';
import BusinessList from './components/businessList/businessList';
import Header from './components/header/header';
import SearchBar from './components/searchBar/searchBar';
import { businessExample } from './data/businesseExample';
import { yelpSorting } from './data/yelpSorting';

function App() {
  return (
    <div className="App">
        <Header />
        <SearchBar 

        />
        <BusinessList 
            yelpSorting={yelpSorting}
            businesses={businessExample}
        />
    </div>
  );
}

export default App;
