import './App.css'
import Business from './components/Business'; 
import SearchBar from './components/SearchBar';

const businessData = {
  src: 'src/assets/Romans-Pizza-Logo.jpg',
  alt: 'roman-pizza',
  width: '250px',
  height: '250px',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
 }
function App() {

  return (
    <>
      <SearchBar />
      <Business business={businessData}/>
      
    </>
  );
}

export default App;
