import './App.css';
// import Business from './components/Business'
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';

const businesses = [
  {
    imageSrc: '/pizza.jpg',
    name: 'Pizza Palace',
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 95
  },
  {
   imageSrc: '/pizza.jpg',
    name: 'Burger Barn',
    address: '456 Side St',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90001',
    category: 'American',
    rating: 4.0,
    reviewCount: 120
  }
];

function App() {
  return (
    <>
      <header>
        <h1>Ravenous</h1>
      </header>
      <div className="hero">
        <h2>Find the best restaurants near you</h2>
        <SearchBar />
      </div>
      <main>
        <BusinessList businesses={businesses} />
      </main>
    </>
  );
}


export default App;
